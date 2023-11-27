import { Message } from "@/types/chat"

export type State = {
  displayNavigation: boolean,
  themeMode: 'dark' | 'light',
  currentModel: string,
  // 消息列表，由于chatGPT 接口的特性，我们需要维护对话的上下文，包括用户和gpt的每次对话消息
  messageList: Message[],
  // 目前正在回复消息的id，实现消息回答过程中不能发送新消息
  streamingId: string
}

export enum ActionType {
  // 更新状态，会在后续操作中更新对应的field
  UPDATE = 'UPDATE',
  // 向消息列表中添加一条消息
  ADD_MESSAGE = 'ADD_MESSAGE',
  // 更新消息列表
  UPDATE_MESSAGE = 'UPDATE_MESSAGE',
  // 重新生成gpt的回复消息
  REMOVE_MESSAGE = 'REMOVE_MESSAGE',
}

type UpdateAction = {
  type: ActionType.UPDATE, // action的type
  field: string, // action操作的属性名
  value: any // action操作的属性值
}
type MessageAction = {
  // 通过type判断是添加消息｜更新消息｜重新生成消息
  type: ActionType.ADD_MESSAGE | ActionType.UPDATE_MESSAGE | ActionType.REMOVE_MESSAGE;
  message: Message;
}

// 目前的action有状态更新和消息列表增更两种情况
export type Action = UpdateAction | MessageAction

export const initState: State = {
  displayNavigation: true,
  themeMode: 'light',
  currentModel: 'gpt-3.5-turbo',
  // 消息列表默认为空数组
  messageList: [],
  // 默认正在回复消息id为空
  streamingId: ''
}
export function reducer(state: State, action: Action) {
  switch (action.type) {
    // 状态的更新可以抽象成一种case
    case ActionType.UPDATE:
      return {...state, [action.field]: action.value};
    // 消息的增加
    case ActionType.ADD_MESSAGE:
      return {...state, messageList: [...state.messageList, action.message]};
    // 消息的更新
    case ActionType.UPDATE_MESSAGE:
      let messageList: Message[] = state.messageList.map((message: Message) => {
        // 查找消息列表中id相符的消息，更新成action的消息
        if (message.id === action.message.id) {
          return action.message;
        } else {
          return message;
        }
      })
      return {...state, messageList};
    // 重新生成消息，删除消息
    case ActionType.REMOVE_MESSAGE:
      let newMessageList = state.messageList.filter((message: Message) => {
        return message.id !== action.message.id;
      })
      return {...state, messageList: newMessageList}
    default: throw new Error("");
  }
}