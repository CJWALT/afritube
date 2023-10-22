import React, { useEffect, useState } from 'react'
import { literature } from '../../TextData';
import { BiX } from 'react-icons/bi'
import Favouritecontext from '../../store/reducer';
import { useContext } from 'react';

const TextModal = () => {
  const [textData, setTextData] = useState('Somethign went Wrong, try Again')

  const ctx = useContext(Favouritecontext);
  const closeModal =()=> {
    ctx.dispatch({
      type: 'CLOSETEXTMODAL',
    })
  }

  const sell = ctx.state.textRefrence;

  useEffect(()=> {
    try {
      fetch(sell.text).then(response => response.text()).then(text => {
        setTextData(text)
      })
    } catch (error) {
      setTextData('Loading...')
    }
  },[])
  

  
  return (
    <div className='fixed top-0 left-0 p-8 bg-[white] w-[100%] h-[100vh] text-[black] px-[35px] md:px-[5%]'>
      <BiX className='p-2 rounded-full bg-[#0066A9] my-4 text-4xl text-white absolute right-4 top-0 cursor-pointer z-[999]' onClick={closeModal}/>
      <img src={sell.thumbnail} alt='thumbnail' className='w-[100%] h-[200px] object-cover rounded'/>
      <h1 className='text-3xl py-4'>{sell.name}</h1>
      <p className='overflow-y-auto max-h-[100%] leading-8 font-thin'>{textData}</p>
    </div>
  )
}

export default TextModal
