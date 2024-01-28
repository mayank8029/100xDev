import React from 'react'
import { useRecoilValue } from 'recoil'
import { TextState, charCountState } from './atom'


const CharacterShow = () => {
    const value = useRecoilValue(TextState)
    const length = useRecoilValue(charCountState) ; 
  return (
    <>
    <div>characterState: {value}</div>
    <div> characterCount: {length}</div>
    </>
  )
}

export default CharacterShow