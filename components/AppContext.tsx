"use client"

import { Action, State, initState, reducer } from "@/reducers/AppReducer";
import { Dispatch, ReactNode, createContext, useContext, useMemo, useReducer, useState } from "react"

type AppContextProps = {
  state: State,
  // setState: Dispatch<SetStateAction<State>>
  // 使用useReducer替换useState管理复杂状态
  dispatch: Dispatch<Action>
}
// 创建app context
const AppContext = createContext<AppContextProps>(null!);
export function useAppContext() {
  return useContext(AppContext);
}
export default function AppContextProvider({
  children
}: {
  children: ReactNode
}) {
  // 使用useState维护状态，并将参数传入value
  // 使用useReducer替换useState管理复杂状态
  // const [state, setState] = useState<State>({ displayNavigation: true, themeMode: 'light' });
  const [state, dispatch] = useReducer(reducer, initState)
  // 使用useMemo缓存计算结果作为contextValue，而不是直接使用{state, setState}
  // 因为每次运行AppContextProvider函数的时候，useState也会重新运行:
  //    state: 只有第一次设置的初始值会生效，其余以后再执行，获取的状态都是最新的状态，而不是初始值
  //    setState: 每一次返回的都是新的方法函数
  // 可以避免AppContext重新运行时重新生成的setState导致整个内部的组件产生不必要的更新
  // const contextValue = useMemo(() => {
  //   return {state, setState};
  // }, [state, setState])
  
  // 使用useReducer替换useState管理复杂状态
  const contextValue = useMemo(() => {
    return {state, dispatch}
  }, [state, dispatch])
  return <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
}