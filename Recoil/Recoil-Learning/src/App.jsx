import React from 'react'
import MainApp from './character-count/MainApp'
import Todo from './Todo-list/Todo'
import { RecoilRoot } from 'recoil'
const App = () => {
  return (
    <>
    <RecoilRoot>
    <MainApp/>
    <Todo/>
    </RecoilRoot>
    </>
  )
}

export default App
