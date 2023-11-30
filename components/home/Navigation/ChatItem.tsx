import { Chat } from "@/types/chat"
import { MdCheck, MdClose, MdDeleteOutline } from "react-icons/md";
import { PiChatBold, PiTrashBold } from "react-icons/pi";
import { AiOutlineEdit } from "react-icons/ai";
import { useEffect, useState } from "react";
import { useEventBusContext } from "@/components/EventBusContext";
import { useAppContext } from "@/components/AppContext";
import { ActionType } from "@/reducers/AppReducer";
type Props = {
  item: Chat,
  selected: boolean,
  onSelected: (chat: Chat) => void;
}
export default function ChatItem({ item, selected, onSelected}: Props) {
  // 维护当前item是否编辑的状态和是否删除的状态
  const [editing, setEditing] = useState(false);
  const [deleting, setDeleting] = useState(false);
  // 切换选中item时，重置编辑状态和删除状态
  useEffect(() => {
    setEditing(false);
    setDeleting(false);
  }, [selected])

  /* 修改对话标题 */
  const { publish } = useEventBusContext();
  // 临时保存对话标题
  const [title, setTitle] = useState(item.title);
  const updateChat = async () => {
    const response = await fetch('/api/chat/update', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({id: item.id, title})
    })
    if (!response.ok) {
      console.log(response.statusText);
      return 
    }
    const {code} = await response.json();
    // 如果数据修改成功，那么通过事件通知来更新本地的chatList
    if (code===0) {
      publish('fetchChatList');
    }
  }

  /* 删除对话 */
  const {dispatch} = useAppContext();
  const deleteChat = async () => {
    const response = await fetch(`/api/chat/delete?id=${item.id}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    })
    if (!response.ok) {
      console.log(response.statusText);
      return 
    }
    const {code} = await response.json();
    // 如果数据修改成功，那么通过事件通知来更新本地的chatList
    if (code===0) {
      publish('fetchChatList');
      // 删除当前选中的chat之后，应该将客户端的selectedChat置空
      dispatch({
        type: ActionType.UPDATE,
        field: 'selectedChat',
        value: null
      })
    }
  }
  return <li
    key={item.id}
    className={`relative group flex items-center p-3 space-x-3 cursor-pointer rounded-md hover:bg-gray-800 
      ${selected ? 'bg-gray-800' : ''}
    `}
    onClick={() => onSelected(item)}
    >
    <div> 
      {deleting ? <PiTrashBold /> : <PiChatBold />}
    </div>
    {/* 编辑状态下一定是选中的状态，显示输入框 */}
    {editing ? 
      <input 
        className="flex-1 min-w-0 bg-transparent outline-none"
        // react中手动实现mvvm
        value={title}
        onChange={(e) => {
          setTitle(e.target.value);
        }}
        autoFocus={true}
      /> : 
      <div className="relative flex-1 whitespace-nowrap overflow-hidden">
        {item.title}
        <span className={`group-hover:from-gray-800 absolute right-0 inset-y-0 w-8 bg-gradient-to-l
        ${selected ? 'from-gray-800 pr-[3.5em]' : 'from-gray-900'}
        `}></span>
      </div>
    }
    {/* 操作按钮默认不显示，只有选中状态才显示 
        在编辑状态下显示确定和取消按钮，否则显示编辑和删除按钮
        删除状态下也有确定和取消按钮，复用同一组按钮
        确认和取消都是退出当前的编辑或者删除状态
    */}
    {selected 
      && <div className="absolute right-1 flex">
        {
          editing || deleting ? 
          <>
            <button 
              className="p-1 hover:text-white"
              onClick={(e) => {
                if (deleting) {
                  deleteChat();
                  console.log('delete');
                } else {
                  // 保存编辑内容的时候发送网络请求
                  // 更改数据库中相应元素的状态
                  updateChat()
                  console.log('edit');
                }
                setDeleting(false);
                setEditing(false);
              }}
            >
              <MdCheck />
            </button>
            <div className="p-1 hover:text-white"
              onClick={(e) => {
                setDeleting(false);
                setEditing(false);
                e.stopPropagation();
              }}
            >
              <MdClose />
            </div> 
          </> : 
          <>
            <button 
              className="p-1 hover:text-white"
              onClick={(e) => {
                setEditing(true);
                e.stopPropagation();
              }}
            >
              <AiOutlineEdit />
            </button>
            <div 
              className="p-1 hover:text-white"
              onClick={(e) => {
                setDeleting(true);
                e.stopPropagation();
              }}
            >
              <MdDeleteOutline />
            </div>
          </>
        }

    </div>}
  </li>
}