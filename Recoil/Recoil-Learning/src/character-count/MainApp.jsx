import React from 'react'
import Input from './Input'
import CharacterShow from './CharacterShow'
import {RecoilRoot} from 'recoil'

const MainApp = () => {
  return (
    <>
    <RecoilRoot>
    <Input/>
    <CharacterShow/>
    </RecoilRoot>
    </>
  )
}

export default MainApp