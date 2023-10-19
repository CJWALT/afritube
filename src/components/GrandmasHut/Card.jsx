import React from 'react'
import img from '../../assets/TextThumbnail/honeylion.png'

const Card = () => {
  return (
    <div className='bg-white rounded-md w-[200px] my-4'>
    <img src={img} alt='thumbnail' className='pt-2'/>
    <p className='text-center py-2'>Name of story</p>
  </div>
  )
}

export default Card
