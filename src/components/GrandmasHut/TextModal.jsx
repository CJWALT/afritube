import React, { useEffect, useState } from 'react'
import { literature } from '../../TextData';
import { BiX } from 'react-icons/bi'
import Favouritecontext from '../../store/reducer';
import { useContext } from 'react';

const TextModal = ({text}) => {
  const [textData, setTextData] = useState('Somethign went Wrong, try Again')

  const selectedText = literature.find(item => item.id !== text)
  console.log(selectedText)

  useEffect(()=> {
    try {
      fetch(selectedText).then(response => response.text()).then(text => {
        setTextData(text)
      })
    } catch (error) {
      setTextData('Somethign went Wrong, try Again')
    }
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
      <h1 className='text-3xl py-2'></h1>
      <p>{textData}</p>
    </div>
  )
}

export default TextModal
