"use client"
import { useAppContext } from '@/components/AppContext';
import Button from '@/components/common/Button';
import { ActionType } from '@/reducers/AppReducer';
import { HiPlus } from 'react-icons/hi';
import { LuPanelLeft } from 'react-icons/lu';

export default function Menubar() {
  // const {
  //   setState
  // } = useAppContext();
  // const clickHandler = () => {
  //   // setXXX语法并不像this.setState一样支持partial update
  //   setState((prev) => ({...prev, displayNavigation: false}))
  // }
  // return <div className='flex space-x-3'>
  //   <Button
  //     icon={HiPlus}
  //     variant='outline'
  //     className='flex-1'
  //   >新建对话</Button>
  //   <Button
  //     icon={LuPanelLeft}
  //     variant='outline'
  //     onClick={clickHandler}
  //   ></Button>
  // </div>
  // 使用useReducer替换useState管理复杂状态
  const {
    dispatch
  } = useAppContext();
  const clickHandler = () => {dispatch({
    type: ActionType.UPDATE,
    field: 'displayNavigation',
    value: false
  })}
  return <div className='flex space-x-3'>
    <Button
      icon={HiPlus}
      variant='outline'
      className='flex-1'
    >新建对话</Button>
    <Button
      icon={LuPanelLeft}
      variant='outline'
      onClick={clickHandler}
    ></Button>
  </div>

}
