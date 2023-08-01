import React from 'react'

function Countdown({onClose, closebtn}) {
    
  return (
    <div>
        <div className='bg-videoListDetailColor w-100 fixed top-0 left-0 w-full bg-opacity-80 h-full flex align-center justify-center'> 
          
            <div className='h-50 w-96  mt-4'>
              <div className='relative bg-bgCount overflow-hidden h-20 rounded-t-[1.4rem]'> 
                <img src="/img/r-cloud.png" alt="" className=' w-8 absolute top-2 right-6' />
                <img src="/img/simp.png" alt="" className=' w-10 absolute top-8 right-12' />
                <img src="/img/poly.png" alt="" className='w-20 absolute top-2 left-14' />
                <img src="/img/vector.png" alt="" className='w-8  absolute left-0 rounded-tl-[1.4rem]' />
              </div> 

              <div className='flex flex-col items-center bg-white relative h-24   z-10 mb-8'>
                <img src='/img/top-clds.png' alt='cloud top' className='absolute bbject-contain -top-7'/>
                <img src='/img/bottom-clds.png' alt='cloud top' className='absolute -bottom-10 object-contain'/>
                

                  <small className='z-20 text-[.8rem] text-red-500 font-manrobe font-semibold mt-1 mb-2'>
                      Free trial ends in 
                  </small> 

                  <div className='flex flex-row gap-2 mb-4 mx-4 justify-center z-20'>
                    <div className='text-red-400 font-medium text-[1.5rem] bg-gray-300 bg-opacity-20 rounded-[.7rem] px-2 flex flex-col items-center'>
                      <p className='font-poppins'>
                      30</p>
                      <small className='text-[.4rem] font-normal mb-2 font-mantobe'>Days</small>
                    </div>
                    <div className='self-center font-bold text-[1rem]'>:</div>
                    <div className='text-red-400 font-medium text-[1.5rem] bg-gray-300 bg-opacity-20 rounded-[.7rem] px-2 flex flex-col items-center'>
                      <p className='font-poppins'>
                      59</p>
                      <small className='text-[.4rem] font-normal mb-2 font-mantobe'>Hours</small>
                    </div>
                    <div className='self-center font-bold text-[1rem]'>:</div>
                    <div className='text-red-400 font-medium text-[1.5rem] bg-gray-300 bg-opacity-20 rounded-[.7rem] px-2 flex flex-col items-center'>
                    <p className='font-poppins'>
                      30</p>
                      <small className='text-[.4rem] font-normal mb-2 font-mantobe'>Minutes</small>
                    </div>
                    <div className='self-center font-bold text-[1rem]'>:</div>
                    <div className='text-red-400 font-medium text-[1.5rem] bg-gray-300 bg-opacity-20 rounded-[.7rem] px-2 flex flex-col items-center'>
                    <p className='font-poppins'>
                      27</p>
                      <small className='text-[.4rem] font-normal mb-2 font-mantobe'>Seconds</small>
                    </div>
                  </div>
                  
              </div >      
            

              <div className='relative -mt-6 py-9 flex flex-col items-center bg-gradient-to-b from-bgGrad to-bgGrad-300 rounded-b-[1.4rem]'>
                <h3 className='text-center font-regular text-[1.3rem] font-belanosima'>Enjoy more entertainment for kids </h3>
                <a href='#' className='font-poppins text-[.7rem] text-linkGray'>Switch to a premium account</a>
              
              
                <div className='flex flex-row gap-3 justify-center mt-3'>
                  <button className='text-white bg-bgCount px-8 py-1 font-manrobe font-bold rounded-[1.4rem]'>
                    Yes
                  </button>

                  <button onClick={onClose}  className='bg-bgNot px-6 py-1 rounded-[1.4rem]'> Not Interested</button>
                </div>
              </div>
            </div>
        </div>
    </div>
  )
}

export default Countdown