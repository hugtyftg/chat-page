"use client"
import { useAppContext } from '@/components/AppContext';
import Button from '@/components/common/Button';
import { ActionType } from '@/reducers/AppReducer';
import { MdDarkMode, MdLightMode, MdInfo } from 'react-icons/md';

export default function Toolbar() {
  // 使用useReducer替换useState管理复杂状态
  // const {
  //   state: { themeMode },
  //   setState
  // } = useAppContext();
  // // 切换主题模式
  // const changeThemeMode = () => {
  //   // setXXX语法并不像this.setState一样支持partial update
  //   setState((prev) => ({
  //     ...prev, 
  //     themeMode: prev.themeMode === 'dark' ? 'light' : 'dark'
  //   }))
  // }
  const {
    state: { themeMode },
    dispatch
  } = useAppContext();
  // 切换主题模式
  const changeThemeMode = () => { dispatch({
    type: ActionType.UPDATE, 
    field: 'themeMode', 
    value: themeMode === 'dark' ? 'light' : 'dark'
  }) }
  return <div className='absolute left-0 bottom-0 right-0 bg-gray-800 flex p-2 justify-between'>
    <Button
      icon={themeMode === 'dark' ? MdDarkMode : MdLightMode}
      variant='text'
      onClick={changeThemeMode}
    />
    <Button
      icon={MdInfo}
      variant='text'
    ></Button>
  </div>
}
