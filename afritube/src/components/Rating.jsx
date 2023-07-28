import React from 'react'
import { AiFillStar, AiOutlineStar } from 'react-icons/ai'

function Rating() {
  return (
    <>
        <div className='flex flex-row flex-wrap'> 

            <AiOutlineStar/>
            <AiOutlineStar/>
            <AiOutlineStar/>
            <AiOutlineStar/>
            <AiFillStar/>
        </div>
    </>
  )
}

export default Rating