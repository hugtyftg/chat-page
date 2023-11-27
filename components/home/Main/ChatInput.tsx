import Button from "@/components/common/Button";
import { MdRefresh } from "react-icons/md"
import { PiLightningFill, PiStopBold } from "react-icons/pi"
import { FiSend } from "react-icons/fi"
import ReactTextareaAutosize from "react-textarea-autosize";
import { useRef, useState } from "react";
import { v4 as uuidV4 } from 'uuid';
import { Message, MessageRequestBody } from "@/types/chat";
import { useAppContext } from "@/app/AppContext";
import { ActionType } from "@/reducers/AppReducer";
import React from "react";
export default function ChatInput() {
  // 保存用户输入的消息
  const [messageText, setMessageText] = useState('');
  // 参数中还需要附加历史消息，所以要从全局状态中读取消息列表、模型类型
  const { state: {messageList, currentModel, streamingId}, dispatch } = useAppContext();
  // 停止生成消息
  // 点击按钮后，stopRef存储的值会变成true，但是这并不引起JSX函数的重新执行、页面重新渲染
  const stopRef = useRef(false);
  /* 发送消息 */
  // 最普通的发送消息
  const send =async () => {
    const messages = addMsg();
    doSend(messages)
  }
  // 删除消息重新发送
  const reSend =async () => {
    // 不需要向全局状态的消息列表中再添加消息
    const messages = [...messageList]; // 浅复制一份临时的消息列表的数据
    // 还需要删除最后一条回复的消息
    if (messages.length !== 0 && messages[messages.length - 1].role === 'assistant') {
      dispatch({
        type:ActionType.REMOVE_MESSAGE, 
        message: messages[messages.length - 1]
      })
      // 临时消息列表也需要删除最后一项
      messages.splice(messages.length - 1, 1);
    }
    doSend(messages);
  }
  /* 发送消息的步骤功能 */
  // 向全局添加一条消息，并且返回此时全局的消息列表
  const addMsg = (): Message[] => {
    // 用户在输入框中输入的请求消息chatGPT请求格式
    const message: Message = {
      id: uuidV4(),
      role: 'user',
      content: messageText,
    }
    // 向全局状态中添加当前新增的消息，更新消息时间队列
    dispatch({type: ActionType.ADD_MESSAGE, message});
    // chatGPT的api请求还需要历史消息，所以需要把全局状态中的消息和历史消息连接在一起
    const messages = messageList.concat([message]);
    return messages;
  }
  // 发送客户端请求得到服务端接口的数据
  const doSend = async (messages: Message[]) => {
    // 将消息列表时间序列和模型
    const body: MessageRequestBody = { messages, model: currentModel };
    // 测试数据：将用户输入的messageText包装成JSON字符串，作为POST的请求体
    // const body = JSON.stringify({messageText});
    // 清空输入框
    setMessageText('');
    // 终止fetch可以用内置对象AbortController，她不仅可以终止fetch，还可以终止其他的异步任务
    const controller = new AbortController();
    const response = await fetch('/api/chat', {
      method: 'POST',
      headers: {
        // 以json字符串的形式发送POST请求
        "Content-Type": 'application/json'
      },
      signal: controller.signal,
      // 将请求体包装成JSON字符串作为请求体内容
      body: JSON.stringify(body)
    })
    // 检查状态码，如果状态码不正常直接返回并打印日志
    if (!response.ok) {
      console.log(response.statusText);
      return;
    }
    // 检查响应体返回内容，如果不正常直接返回并打印日志
    if (!response.body) {
      console.log('response body error');
      return;
    }
    // 排除这两种异常情况，说明请求成功
    // 将服务端API返回的消息放入全局消息列表中
    const responseMessage: Message = {
      id: uuidV4(),
      role: 'assistant',
      content: '',
    }
    dispatch({type: ActionType.ADD_MESSAGE, message: responseMessage});
    // 接受服务端返回的消息的时候，将streamingId改为正在接受的消息的id
    dispatch({
      type: ActionType.UPDATE,
      field: 'streamingId',
      value: responseMessage.id
    })
    // 获取返回的数据流
    const reader = response.body.getReader();
    // 解码器，可以将数据从字节流解码成字符串
    const decoder = new TextDecoder();
    // 是否读取完成的标志
    let done = false;
    // 服务端返回的内容
    let content = '';
    // 循环读数据流
    while (!done) {
      // 中断的时候要重置标志位stopRef、使用control终止fetch、streamingId重置，同时结束循环
      if (stopRef.current) {
        stopRef.current = false;
        controller.abort();
        dispatch({type: ActionType.UPDATE, field: 'streamingId', value: ''})
        continue;
      }
      const result = await reader.read();
      // 更新标志
      done = result.done;
      // 解码数据流
      const chunk = decoder.decode(result.value);
      // 拼接服务端返回的数据块chunk
      content += chunk;
      // 在数据流逐渐解码的过程中更新数据
      dispatch({
        type: ActionType.UPDATE_MESSAGE,
        message: {...responseMessage, content}
      })
    }
    // 接受服务端message stream完毕后重置状态
    dispatch({
      type: ActionType.UPDATE,
      field: 'streamingId',
      value: ''
    })
  }

  return <div className="absolute bottom-0 inset-x-0 bg-gradient-to-b from-[rgba(255,255,255,0)] from-[13.94%] to-[#fff] to-[54.73%] pt-10 dark:from-[rgba(53,55,64,0)] dark:to-[#353740] dark:to-[58.85%]">
    <div className="w-full max-x-4xl mx-auto flex flex-col items-center px-4 space-y-4">
      {/* 只有在消息列表不为空的情况下才显示重新生成和停止生成，在消息列表不为空且正在生成消息的时候显示停止生成 */}
      { messageList.length !== 0 && (
        streamingId !== '' ? 
          <Button
            icon={PiStopBold}
            variant="primary"
            onClick={() => {
              stopRef.current = true;
            }}
          >停止生成</Button> :
          <Button
            icon={MdRefresh}
            variant="primary"
            onClick={reSend}
          >重新生成</Button>
      )}
      {/* 底部图标输入框和按钮 */}
      <div className="flex items-end w-full border border-black/10 dark:border-gray-800/50 bg-white dark:bg-gray-700 rounded-lg shadow-[0_0_15px_rgba(0,0,0,0.1)] py-4">
        <div className="mx-3 mb-2.5">
          <PiLightningFill />
        </div>
        <ReactTextareaAutosize 
          className="flex-1 max-h-64 mb-1.5 bg-transparent text-black dark:text-white resize-none border-0"
          placeholder="输入一条消息..."
          rows={1}
          // React手动实现MVVM
          value={messageText}
          onChange={(e) => setMessageText(e.target.value)}
        />
        <Button 
          icon={FiSend}
          // 两种情况禁止发送新消息
          // 1.input输入为空
          // 2.节流，生成或发送消息的过程中
          // primary状态的按钮在disabled状态切换的时候，样式有过渡效果
          disabled={messageText.trim() === '' || streamingId !== ''}
          variant="primary"
          className="mx-3 rounded-lg"
          // 点击按钮时将数据发送到服务端，服务端返回对应的输出
          onClick={send}
        />
      </div>
      {/* 页脚 */}
      <footer className="text-center text-sm text-gray-700 dark:text-gray-300 px-4 pb-6">
        ©️{new Date().getFullYear()}&nbsp; <a 
          className="font-medium py-[1px] border-b border-dotted border-black/60 hover:border-black/0 dark:border-gray-200 dark:hover:border-gray-200/0 animated-underline"
        href="http://120.46.138.101" target="_blank">欢迎查看我的另一个项目</a>
      </footer>
    </div>
  </div>
}