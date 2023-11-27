import { useAppContext } from "@/app/AppContext";
import Button from "@/components/common/Button";
import { ActionType } from "@/reducers/AppReducer";
import { LuPanelLeft } from "react-icons/lu";

// 显示对话面板的按钮
export default function Menu() {
  // const {
  //   state: { displayNavigation }, 
  //   setState
  // } = useAppContext();
  // return <Button 
  //   icon={LuPanelLeft}
  //   className={`${
  //     displayNavigation ? 'hidden' : ''
  //   } fixed left-2 top-2`}
  //   variant="outline"
  //   onClick={() => {
  //     setState(prev => ({...prev, displayNavigation: true}))
  //   }}
  // />
  // 使用useReducer替换useState管理复杂状态
  const {
    state: { displayNavigation }, 
    dispatch
  } = useAppContext();
  return <Button 
    icon={LuPanelLeft}
    className={`${
      displayNavigation ? 'hidden' : ''
    } fixed left-2 top-2`}
    variant="outline"
    onClick={() => {dispatch({
      type: ActionType.UPDATE,
      field: 'displayNavigation',
      value: true
    })}}
  />
}