"use client"
import { groupByDate } from "@/common/util";
import { Chat } from "@/types/chat";
import { useEffect, useMemo, useRef, useState } from "react";
import ChatItem from "./ChatItem";
import { useEventBusContext } from "@/components/EventBusContext";
export default function ChatList() {
  const [chatList, setChatList] = useState<Chat[]>([])
  // 选中的对话
  const [selectedChat, setSelectedChat] = useState<Chat>();
  // 缓存分组列表
  const groupList = useMemo(() => {
    return groupByDate(chatList);
  }, [chatList])
  
  /* 在组件渲染完毕后订阅和取消订阅 */
  const { subscribe, unsubscribe } = useEventBusContext();
  useEffect(() => {
    const callback: EventListener = () => {
      console.log('fetchChatList');
    }
    subscribe('fetchChatList', callback);
    return () => {
      unsubscribe('fetchChatList', callback);
    }
  }, [])

  /* 分页查询请求 */
  // 维护当前分页，默认为第一页
  const pageRef = useRef(1);
  
  // 获取分页数据
  const getData = async () => {
    // 请求分页查询接口
    const response = await fetch(`/api/chat/list?page=${pageRef.current}`, {
      method: 'GET'
    });
    if (!response.ok) {
      console.error('prisma page request interface error!');
      return;
    }
    const {data} = await response.json();
    // 如果是请求第一页的数据，直接覆盖对话列表
    if (pageRef.current === 1) {
      setChatList(data.list);
    } else {
      // 如果是请求其他页的数据，则追加到末尾
      setChatList((list) => list.concat(data.list));
    }
  }
  // 在第一次渲染和每次收到事件通知的时候刷新对话列表
  useEffect(() => {
    getData();
  }, [])
  useEffect(() => {
    const callback: EventListener = () => {
      pageRef.current = 1
      getData()
    }
    subscribe("fetchChatList", callback);
    return () => unsubscribe("fetchChatList", callback);
  }, [])
  //判断当前item是否是被选中
  return <div className="flex-1 mb-[48px] mt-2 flex flex-col overflow-y-auto">
      {groupList.map(([date, list]) => {
        return <div key={date}>
          {/* css粘性定位：relative和fixed的组合 */}
          <div className="sticky top-0 z-10 p-3 text-sm bg-gray-900 text-gray-500">
            {date}
          </div>
          <ul>
            {list.map((item: Chat) => {
              const selected = selectedChat?.id === item.id;
              return <ChatItem 
                key={item.id}
                item={item}
                selected={selected}
                onSelected={(chat) => {
                  setSelectedChat(chat);
                }}
              />
            })}
          </ul>
        </div>
      })}

  </div>
}