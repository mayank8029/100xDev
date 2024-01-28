import React from 'react'
import { useRecoilState } from 'recoil';
import { TextState } from './atom';

const Input = () => {

    const [text , setText]= useRecoilState(TextState)

    const onChange= (e)=>{
        
        setText(e.target.value);
    }


  return (
    <>
    <input type='text' value ={text} onChange={onChange} />
    </>
  )
}

export default Input