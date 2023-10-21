import React, { useEffect, useState } from 'react'
import text from '../../TextFiles/Literature/Lit.txt'
import { BiX } from 'react-icons/bi'
import Favouritecontext from '../../store/reducer';
import { useContext } from 'react';

const TextModal = () => {
  const [textCont, setText] = useState('');

  useEffect(()=> {
       fetch(text).then(response => response.text()).then(text => {
         setText(text)
       })
  },[])
  
  const ctx = useContext(Favouritecontext);
  const closeModal =()=> {
    ctx.dispatch({
      type: 'CLOSETEXTMODAL',
    })
  }

  
  return (
    <div className='fixed top-0 left-0 p-8 bg-[#1c1b1ffb] w-[100%] h-[100vh] text-white'>
      <BiX className='p-2 rounded-full bg-white my-4 text-4xl text-black absolute right-4 top-0 cursor-pointer' onClick={closeModal}/>
      <h1 className='text-3xl py-2'>This is The header</h1>
      {textCont}
    </div>
  )
}

export default TextModal
