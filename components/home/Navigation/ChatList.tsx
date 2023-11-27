"use client"
import { groupByDate } from "@/common/util";
import { Chat } from "@/types/chat";
import { useMemo, useState } from "react";
import ChatItem from "./ChatItem";
export default function ChatList() {
  const [chatList, setChatList] = useState<Chat[]>([
    {
      id: "1",
      title: "mmy的第一个nextjs实战项目",
      updateTime: Date.now()
    },
    {
        id: "2",
        title: "nextjs性能真不错呀",
        updateTime: Date.now() - 1000 * 60 * 60 * 24 * 1
    },
    {
        id: "3",
        title: "nextjs性能真不错呀",
        updateTime: Date.now() - 1000 * 60 * 60 * 24 * 1
    },
    {
        id: "4",
        title: "nextjs性能真不错呀",
        updateTime: Date.now() - 1000 * 60 * 60 * 24 * 2
    },
    {
        id: "5",
        title: "nextjs性能真不错呀",
        updateTime: Date.now() - 1000 * 60 * 60 * 24 * 2
    },
    {
        id: "6",
        title: "nextjs性能真不错呀",
        updateTime: Date.now() - 1000 * 60 * 60 * 24 * 2
    },
    {
        id: "7",
        title: "nextjs性能真不错呀",
        updateTime: Date.now() - 1000 * 60 * 60 * 24 * 2
    },
    {
        id: "8",
        title: "next",
        updateTime: Date.now() - 1000 * 60 * 60 * 24 * 2
    },
    {
        id: "9",
        title: "nextj s",
        updateTime: Date.now() - 1000 * 60 * 60 * 24 * 21
    },
    {
        id: "10",
        title: "nextjs性能真不错呀",
        updateTime: Date.now() - 1000 * 60 * 60 * 24 * 22
    },
    {
        id: "11",
        title: "nextjs性能真不错呀",
        updateTime: Date.now() - 1000 * 60 * 60 * 24 * 23
    },
    {
        id: "12",
        title: "nextjs性能真不错呀",
        updateTime: Date.now() - 1000 * 60 * 60 * 24 * 24
    },
    {
        id: "13",
        title: "nextjs性能真不错呀",
        updateTime: Date.now() - 1000 * 60 * 60 * 24 * 25
    },
    {
        id: "14",
        title: "nextjs性能真不错呀",
        updateTime: Date.now() - 1000 * 60 * 60 * 24 * 26
    },
    {
        id: "15",
        title: "我好想吃饭啊",
        updateTime: Date.now() + 1000 * 60 * 60 * 24 * 27
    },
    {
      id: "16",
      title: "我好想吃饭啊",
      updateTime: Date.now() + 1000 * 60 * 60 * 24 * 27
    },
    {
      id: "17",
      title: "我好想吃饭啊",
      updateTime: Date.now() + 1000 * 60 * 60 * 24 * 27
    },
    {
      id: "18",
      title: "我好想吃饭啊",
      updateTime: Date.now() + 1000 * 60 * 60 * 24 * 27
    },
    {
      id: "19",
      title: "我好想吃饭啊",
      updateTime: Date.now() + 1000 * 60 * 60 * 24 * 27
    },
    {
      id: "20",
      title: "我好想吃饭啊",
      updateTime: Date.now() + 1000 * 60 * 60 * 24 * 27
    },
    {
      id: "21",
      title: "我好想吃饭啊",
      updateTime: Date.now() + 1000 * 60 * 60 * 24 * 27
    },
])
  // 点击选中的对话
  const [selectedChat, setSelectedChat] = useState<Chat>();
  // 缓存计算分组列表
  const groupList = useMemo(() => {
    return groupByDate(chatList);
  }, [chatList])
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