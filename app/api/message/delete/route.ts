// 重新获取消息需要删除原来的消息
import prisma from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

// 注意，不能添加default，这样会找不到接口！
export async function POST(request: NextRequest) {
  // 该请求是query string，从url中获取id参数
  const id = request.nextUrl.searchParams.get('id');
  // 如果id参数为空，返回代表错误的状态码-1
  if (!id) {
    return NextResponse.json({code: -1});
  }
  // 如果id参数不为空，则通过prisma删除数据库中的对应message
  await prisma.message.delete({
    where: {
      id
    }
  });
  // 删除成功后返回状态码0
  return Response.json({code: 0});
}