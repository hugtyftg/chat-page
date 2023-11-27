"use client"

// 发送事件通知，在生成新对话的过程后通知左侧对话列表更新
import { Dispatch, ReactNode, SetStateAction, createContext, useCallback, useContext, useMemo, useReducer, useState } from "react"
type EventListener = (data?: any) => void;
type EventBusContextProps = {
  // 订阅，参数是事件类型和cb
  subscribe: (eventType: string, cb: EventListener) => void,
  // 取消订阅，参数是事件类型和cb
  unsubscribe: (eventType: string, cb: EventListener) => void,
  // 发布事件，参数是事件类型和事件携带的数据
  publish: (eventType: string, data?: any) => void
}
// 创建EventBusContext
const EventBusContext = createContext<EventBusContextProps>(null!);

// 外界通过这个hook拿到事件通知的context
export function useEventBusContext() {
  return useContext(EventBusContext);
}

export default function EventBusContextProvider({
  children
}: {
  children: ReactNode
}) {
  // 保存回调函数的状态，默认为空
  const [listeners, setListeners] = useState<Record<string, EventListener[]>>({});
  // 使用useCallback缓存函数，只会在依赖数组改变的时候重新生成，因此依赖数组必须为listeners
  const subscribe = useCallback((event: string, callback: EventListener) => {
    // 如果没有该事件类型，则初始化一个该事件类型的数组
    if (!listeners[event]) {
      listeners[event] = [];
    }
    // 向该事件类型数组里添加方法
    listeners[event].push(callback);
    // 更新状态，保存新的回调函数数组
    setListeners({...listeners})
  }, [listeners])
  const unsubscribe = useCallback((event: string, callback: EventListener) => {
    // 先判断该类型是否有回调数组
    if (listeners[event]) {
      // 如果有，则删除该回调函数并更新状态值
      listeners[event] = listeners[event].filter(cb => cb !== callback);
      setListeners({...listeners});
    }
  }, [listeners])
  const publish = useCallback((event: string, data?: any) => {
    // 如果该类型有回调数组，则遍历数组，调用每个回调函数
    if (listeners[event]) {
      listeners[event].forEach(cb => cb(data));
    }
  }, [listeners])

  // 将函数封装到contextValue中，使用useMemo减少不必要的开销
  const contextValue = useMemo(() => {
    return {subscribe, unsubscribe, publish}
  }, [subscribe, unsubscribe, publish]);
  return <EventBusContext.Provider value={contextValue}>{children}</EventBusContext.Provider>
}