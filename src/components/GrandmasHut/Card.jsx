import React from 'react'
import img from '../../assets/TextThumbnail/honeylion.png'
import TextModal from './TextModal'
import Favouritecontext from '../../store/reducer';
import { useContext } from 'react';

const Card = () => {
  const ctx = useContext(Favouritecontext);
  const openModal =()=> {
    ctx.dispatch({
      type: 'OPENTEXTMODAL',
    })
  }

  return (
    <div className='bg-white rounded-md w-[200px] my-4 cursor-pointer' onClick={openModal}>
    <img src={img} alt='thumbnail' className='pt-2'/>
    <p className='text-center py-2'>Name of story</p>
  </div>
  )
}

export default Card
