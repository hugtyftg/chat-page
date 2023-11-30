"use client"
import { groupByDate } from "@/common/util";
import { Chat } from "@/types/chat";
import { useEffect, useMemo, useRef, useState } from "react";
import ChatItem from "./ChatItem";
import { useEventBusContext } from "@/components/EventBusContext";
import { useAppContext } from "@/components/AppContext";
import { ActionType } from "@/reducers/AppReducer";
export default function ChatList() {
  const [chatList, setChatList] = useState<Chat[]>([])
  // 选中的对话
  // const [selectedChat, setSelectedChat] = useState<Chat>();
  const { state: {selectedChat}, dispatch } = useAppContext();
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
  const loadingRef = useRef(false); // 节流。对话列表可以滚动触发多次，避免重复请求
  // 获取分页数据
  const getData = async () => {
    // 如果当前没有在加载数据，才能发送数据请求，否则直接返回
    if (loadingRef.current === false) {
      loadingRef.current = true;
      // 请求分页查询接口
      const response = await fetch(`/api/chat/list?page=${pageRef.current}`, {
        method: 'GET',
      });
      if (!response.ok) {
        console.error('prisma page request interface error!');
        loadingRef.current = false;
        return;
      }
      // 每次发起请求后，page递增
      pageRef.current++;
      // 请求成功后，解析获取数据
      const {data} = await response.json();
      // 每次获取数据后更新 是否有更多数据
      hasMoreRef.current = data.hasMore;
      // 如果是请求第一页的数据，直接覆盖对话列表
      if (pageRef.current === 1) {
        setChatList(data.list);
      } else {
        // 如果是请求其他页的数据，则追加到末尾
        setChatList((list) => list.concat(data.list));
      }
      loadingRef.current = false;
    } else {
      return
    }
  }
  // 在第一次渲染和每次收到事件通知的时候刷新对话列表
  useEffect(() => {
    getData();
    return () => {
      loadingRef.current = false;
    }
  }, [])
  useEffect(() => {
    const callback: EventListener = () => {
      pageRef.current = 1
      getData()
    }
    subscribe("fetchChatList", callback);
    return () => {
      unsubscribe("fetchChatList", callback);
      loadingRef.current = false;
    }
  }, [])

  /* 触底加载（上拉加载） */
  const loadMoreRef = useRef(null); // 触底的空格div元素
  const hasMoreRef = useRef(false); // 是否有更多数据
  // 监听loadMoreRef是否处于可见状态
  useEffect(() => {
    let observer: IntersectionObserver | null = null;
    let div = loadMoreRef.current;
    // div DOM被创建之后，实例化之后创建Observer对象
    // IntersectionObserver用于检测元素与元素或者元素与视图窗口的相交情况
    if (div) {
      observer = new IntersectionObserver((entries) => {
        // 如果元素处于可见状态，并且有下一页数据，发起请求下一页数据
        if (entries[0].isIntersecting && hasMoreRef.current) {
          getData();
          console.log('visible');
        }
      })
      observer.observe(div);
    }
    // cleanup，组件销毁的时候取消监听
    return () => {
      // 如果observer和div都存在，则取消监听
      if(observer && div) {
        observer.unobserve(div);
        observer = null;
      }
      loadingRef.current = false;
    }
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
                  dispatch({
                    type: ActionType.UPDATE,
                    field: 'selectedChat',
                    value: chat
                  })
                }}
              />
            })}
          </ul>
        </div>
      })}
    <div ref={loadMoreRef}>&nbsp;</div>
  </div>
}