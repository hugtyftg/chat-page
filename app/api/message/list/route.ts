import prisma from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const chatId = request.nextUrl.searchParams.get('chatId');
  if (!chatId) {
    return NextResponse.json({ code: -1 });
  }
  // 获取所有chatid符合的message
  const list = await prisma.message.findMany({
    where: {
      chatId
    },
    orderBy: {
      createTime: 'asc'
    }
  })
  return NextResponse.json({ code: 0, data: {list} })
}