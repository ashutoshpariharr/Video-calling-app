import Image from 'next/image'
import React from 'react'

export const Loader = () =>  {
    return (
        <div className='w-full h-screen flex items-center justify-center'>
            <Image
                src="/svg/loading-circle.svg"
                alt='loading circle'
                width={50}
                height={50}
            />
        </div>
    )
}
