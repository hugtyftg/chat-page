import { MdOutlineTipsAndUpdates } from "react-icons/md";
import examples from '@/data/example.json';
import { useMemo, useState } from "react";
import Button from "@/components/common/Button";
export default function Example() {
  // 是否全部显示列表信息，并且缓存
  const [showFull, setShowFull] = useState(false);
  const list = useMemo(() => {
    if (showFull) {
      return examples;
    } else {
      return examples.slice(0, 15);
    }
  }, [showFull])
  return <>
    <div className="mt-20 mb-4 text-4xl">
      <MdOutlineTipsAndUpdates />
    </div>
    <ul className="flex justify-center flex-wrap gap-3.5">
      {list.map(example => {
        return <li key={example.act} className="px-4 py-2.5 rounded-lg bg-gray-100 dark:bg-gray-900">
          <Button>{example.act}</Button>
        </li>})
      }
    </ul>
    {
      !showFull && <>
        <p className="p-2">...</p>
        <div className="flex items-center w-full space-x-2">
          <hr className="flex-1 border-t border-dotted border-gray-400 dark:border-gray-500"/>
          <Button onClick={() => setShowFull(true)}>显示全部</Button>
          <hr className="flex-1 border-t border-dotted border-gray-400 dark:border-gray-500"/>
        </div>
      </>
    }
  </>
}