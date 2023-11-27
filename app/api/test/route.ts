import { init } from "next/dist/compiled/webpack/webpack";
import { NextRequest, NextResponse } from "next/server";
// 参数是Next封装好的HTTP请求
export async function GET(request: NextRequest) {
  const {url} = request;
  // 封装为JSON对象返回给客户端
  return NextResponse.json({
    url,
    ReportBody: '来自nextjs服务端接口'
  })
}