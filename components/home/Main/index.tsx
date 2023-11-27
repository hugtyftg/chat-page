import React from 'react'
import Menu from './Menu'
import Welcome from './Welcome'
import ChatInput from './ChatInput'
import Message from './MessageList'
export default function Main() {
  return (
    // 在内容里面呈现滚动条，而不是在整个网页滚动
    <div className='flex-1 relative'>
      <main className='overflow-y-auto w-full h-full bg-white text-gray-900 dark:bg-gray-800 dark:text-gray-100'>
        {/* <Welcome /> */}
        <Menu />
        <Message />
        <ChatInput />
    </main>
    </div>

  )
}
