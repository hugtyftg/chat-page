import { delaySimulation } from "@/common/util";
import { MessageRequestBody } from "@/types/chat";
import { NextRequest } from "next/server";
// 服务端接口
// 测试接口：模拟chatGPT返回的数据
export async function POST(request: NextRequest) {
  // 这里应该是直接调用chatGPT的API获取数据
  // 测试接口中，直接返回请求体的数据
  const { messages } = (await request.json()) as MessageRequestBody;
  // text的编码器
  const encoder = new TextEncoder();
  // 以数据流的形式传输数据
  const stream = new ReadableStream({
    async start(controller) {
      // 测试接口：将请求体中的消息列表的最后一条消息作为response返回
      const messageText = messages[messages.length - 1].content;
      for (let i = 0; i < messageText.length; i++) {
        // 模拟延迟
        await delaySimulation(200);
        controller.enqueue(encoder.encode(messageText[i]));
      }
      controller.close();
    }
  })
  // 将生成的数据流封装成Response返回给客户端
  return new Response(stream);
}