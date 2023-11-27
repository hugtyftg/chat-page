// 用来存放一些基本的声明文件
export interface Chat {
  id: string,
  title: string,
  updateTime: number
}
// 每条消息的interface
export interface Message {
  id: string,
  role: 'user' | 'assistant',
  content: string,
  chatId: string,
}
// 向chat GPT发送的message的请求体的类型
export interface MessageRequestBody {
  messages: Message[],
  model: string,
}