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
  /* 调整对话列表的接口，让接口返回一个是否还有更多数据的字段。
  在滚动到底部的时候，查看上一次获取的数据中的该字段是否为true，
  如果是false，即使滚动到底部也不重新发送请求。 */
  // 获取对话总数量
  const chat = await prisma.chat.count();
  // 判断当前获取的数量是否超过总数量
  // 如果没有超过说明可以继续获取
  const hasMore = page * 20 < chat;
  return NextResponse.json({ code: 0, data: { list, hasMore } })
}