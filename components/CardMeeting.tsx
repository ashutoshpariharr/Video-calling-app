import Image from 'next/image'
import React from 'react'

interface cardProps {
  ImgURL: string
  title: string
  subTitle: string
  bgColors: string
  onClicked: () => void;
}

function CardMeeting({ ImgURL, title, subTitle, bgColors, onClicked }: cardProps) {
  return (
    <section className='w-full h-[250px] cursor-pointer mt-8 rounded-lg p-5 text-white flex flex-col justify-between' style={{
      backgroundColor: bgColors
    }} onClick={onClicked}>
      <div className='backdrop-blur-md bg-white/30 w-[20%] rounded-md text-center p-3'>
        <Image src={ImgURL} alt='meeting' width={20} height={20} />
      </div>
      <div>
        <h5 className='text-lg'>{title}</h5>
        <p className='text-sm font-thin'>{subTitle}</p>
      </div>
    </section>
  )
}

export default CardMeeting
