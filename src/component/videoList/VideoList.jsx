import React from 'react'
import {SlOptionsVertical} from 'react-icons/sl'
import {AiOutlineStar, AiFillStar} from 'react-icons/ai'
import {MdFavorite} from 'react-icons/md'
import Rating from '../rating/Rating'
function VideoList() {
  return (
    <>

      <div className='flex flex-col items-center justify-center w-80 mx-auto'> 

          <div className='relative h-44  border-2 w-72 border-blue-600'> 
            <img src='./img/clip.png' className=' h-44 rounded   mt-1 w-full object-contain'/>

          </div>

          <div className='bg-white w-72 px-6 py-4 rounded-b-[2rem]'> 
            <div className='mb-1 flex flex-row text-medium justify-between'>
              <h5 className='text-sm text-videoListTextColor '>Sponge Bob-The Village Quest</h5>
              <SlOptionsVertical className='self-center cursor-pointer'/>
            </div>
              <div className='flex flex-row gap-2 mb-4'>
                <small className='rounded-[1.4rem] px-[.5rem] py-[.1rem] text-[.6rem] bg-videoListDetailColor'>100 Minutes</small>
                <small className='rounded-[1.4rem] px-[.5rem] py-[.1rem] text-[.6rem] bg-videoListDetailColor'>10 Years Old</small>
              </div>
          <div className='flex flex-row justify-between mt-4'>
              <Rating/>
              <MdFavorite className='text-2xl text-bgFavBtn'/>
          </div>
          </div>
        </div>
    </>
  )
}

export default VideoList