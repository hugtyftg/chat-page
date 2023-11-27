import { memo } from "react";
import ReactMarkdown, { Options } from "react-markdown";
import remarkGfm from "remark-gfm";
import { Prism } from "react-syntax-highlighter"
import { a11yDark } from "react-syntax-highlighter/dist/esm/styles/prism"

function Markdown({children, className='', ...props}: Options) {
  return (
    <ReactMarkdown
      remarkPlugins={[remarkGfm]}
      className={`markdown prose dark:prose-invert ${className}`}
      {...props}
      // 官方插件文档里的高亮插件，需要安装react-syntax-highlighter和types
      components={{
        // code({ node, inline, className, children, ...props }: any) {
        //     const match = /language-(\w+)/.exec(className || "")
        //     return !inline ? (
        //         <Prism
        //             {...props}
        //             style={a11yDark}
        //             language={match?.[1] ?? ""}
        //             PreTag='div'
        //         >
        //             {String(children).replace(/\n$/, "")}
        //         </Prism>
        //     ) : (
        //         <code
        //             {...props}
        //             className={className}
        //         >
        //             {children}
        //         </code>
        //     )
        // }
    }}
    >{children}
    
    </ReactMarkdown>
    
  )
}
export default memo(Markdown);