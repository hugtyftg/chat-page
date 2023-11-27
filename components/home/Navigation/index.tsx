import Button from "@/components/common/Button";
import Menubar from "./Mebubar";
import { useAppContext } from "@/app/AppContext";
import Toolbar from "./Toolbar";
import ChatList from "./ChatList";

export default function Navigation() {
  const {
    state: { displayNavigation }
  } = useAppContext()
  return (
    // 根据全局的displayNavigation状态确定是否显示菜单栏
    // 强制导航组件显示模式为dark，这样一来，全局的themeMode仅仅控制main部分的内容
    <nav className={`${displayNavigation ? '' : 'hidden'} 
    flex flex-col dark relative h-full w-[260px] bg-gray-900 text-gray-300 p-2`}>
      <Menubar />
      <ChatList />
      <Toolbar />
    </nav>
  )
}
