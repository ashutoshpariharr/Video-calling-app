import React from 'react'

function Banner() {

  const date = new Date();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const ampm = hours >= 12 ? 'PM' : 'AM';

  return (
    <main className='h-[264px] rounded-lg w-full mt-[-4rem]' style={{ backgroundImage: `url("/images/hero-background.png")` }}>
      <div className='p-5 flex flex-col justify-between'>
        <div className='bg-slate-800 p-3 rounded-md text-white w-[20%] cursor-pointer'>
          <p className='text-[12px] font-light'>Upcomming Meeting at 12:30pm</p>
        </div>
        <div className='mt-[4rem] text-white'>
          <h1 className='text-[3rem]'>{hours}:{minutes} <span className='text-lg ml-[-0.75rem] mt-[-10px]'>{ampm}</span></h1>
          {/* <p>Friday, 29 March 2024</p> */}
          <p>{new Date().toLocaleDateString('en-US', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' })}</p>
        </div>
      </div>
    </main>
  )
}

export default Banner
