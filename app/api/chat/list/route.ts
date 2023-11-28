import prisma from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  // querystring中获取参数
  const param = request.nextUrl.searchParams.get('page');
  // 将参数转换成数字类型，如果没有查到param则默认第一页
  const page = param ? parseInt(param) : 1;
  // 使用prisma获取数据库中的数据，这里一页有20条记录
  const list = await prisma.chat.findMany({
    // 跳过多少记录
    skip: (page - 1) * 20,
    // 本次查询要获取多少记录
    take: 20,
    // 排序，按照更新时间倒序
    orderBy: {
      updateTime: 'desc'
    }
  })
  return NextResponse.json({ code: 0, data: { list } })
}