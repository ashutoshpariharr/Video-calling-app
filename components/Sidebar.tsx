'use client'

import { SidebarData } from '@/constant/sidebar'
import { cn } from '@/lib/utils';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation'
import React from 'react'

function Sidebar() {

    const pathname = usePathname();

    return (
        <>
            <div className='flex flex-col max-sm:hidden justify-between bg-[#1c1f2e] sticky text-white h-[100vh] p-10 top-5 left-0 w-fit lg:w-[264px]'>
                <div className='flex flex-col gap-6 mt-10'>
                    {
                        SidebarData.map((link) => {
                            const isActive = pathname === link.path || pathname.startsWith(link.label);

                            return (
                                <Link
                                    href={link.path}
                                    key={link.label}
                                    className={cn('flex gap-5 mt-[-1rem] items-center p-3 rounded-lg justify-start text-white', { 'bg-blue-1': isActive })}>
                                    <Image src={link.icon} alt='working find' width={17} height={17} />
                                    <p className='text-[13px]'>{link.label}</p>
                                </Link>)
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default Sidebar
