import prisma from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

// 用户创建消息、在服务端生成id和updateTime
// 注意，不能添加default，这样会找不到接口！
export async function POST(request: NextRequest) {
  // 读取请求体
  const body = await request.json();
  // 解构出请求体中的id，并且将其余的信息都作为data（rest params）
  const {id, ...data} = body;
  // 如果data中chatId为空字符，说明这是一个新的对话，需要重新生成chat对象
  if (!data.chatId) {
    // 向数据库中添加一条新的record
    const chat = await prisma.chat.create({
      // 其他的属性会自动生成，因为id和updateTime都有default值
      data: {
        title: 'new chat'
      }
    })
    // 将id赋值给消息参数
    data.chatId = chat.id;
  }
  // prisma中的upsert方法用于创建或更新记录
  // 如果id为空字符串，则更新；如果id为空字符串，说明这是一条新的message，需要新建
  const message = await prisma.message.upsert({
    // 如果where中的参数匹配上，则更新记录；如果没有匹配上，则增加记录
    create: data,
    update: data,
    where: {
      id
    }
  })
  // 将创建好的消息记录返回给客户端
  return NextResponse.json({code: 0, data: {
    message
  }})
}