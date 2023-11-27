import { Chat } from "@/types/chat"
import { MdCheck, MdClose, MdDeleteOutline } from "react-icons/md";
import { PiChatBold, PiTrashBold } from "react-icons/pi";
import { AiOutlineEdit } from "react-icons/ai";
import { useEffect, useState } from "react";
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
        defaultValue={item.title}
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
          editing || deleting ? <>
            <button 
              className="p-1 hover:text-white"
              onClick={(e) => {
                if (deleting) {
                  console.log('delete');
                } else {
                  console.log('edit');
                }
                setDeleting(false);
                setEditing(false);
                e.stopPropagation();
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
          </>: <>
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