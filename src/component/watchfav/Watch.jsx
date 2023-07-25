import React from 'react'
import {TbArrowsShuffle2} from 'react-icons/tb'
import VideoList from '../videoList/VideoList'
function Watch() {
  return (
    <>
        <div className='bg-green-200 rounded-xl p-7 max-w-4xl -mt-4 mx-8 '>
          
            <div className='mb-6 flex flex-row relative justify-between gap-20 overflow-y-scroll scrollbar-none'> 


                <div className='flex flex-row self-center justify-between gap-6 align-center  h-8'>
                    <button className="text-sm px-3 w-32  py-0 rounded-[.7rem] border-navButtonIcon border bg-watchBtnTypesBg hover:bg-black hover:text-white">Megas XLR </button> 
                    <button className="text-sm px-3 w-32  py-0 rounded-[.7rem] border-navButtonIcon border bg-watchBtnTypesBg hover:bg-black hover:text-white">Megas XLR </button> 
                    <button className="text-sm px-3 w-32 py-0 rounded-[.7rem] border-navButtonIcon border bg-watchBtnTypesBg ">Superman </button> 
                    <button className="px-3 py-0 w-32 text-sm rounded-[.7rem] border-navButtonIcon border bg-watchBtnTypesBg ">Baby shark </button>
                </div> 

                <div>
                <TbArrowsShuffle2 className="self-center justify-end bg-white rounded-full text-6xl p-4" />
                </div>
                             
            </div>

            <div className='flex flex-col flex-wrap gap-4'>
              <VideoList/>
              <VideoList/>
              <VideoList/>
              <VideoList/>
              <VideoList/>
              <VideoList/>
            </div>
            
            


        </div>
    
    </>
  )
}

export default Watch