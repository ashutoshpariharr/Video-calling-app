import Image from 'next/image';
import React from 'react';
import yoomLogo from "../public/svg/yoom-logo.svg";
import MobileNav from './MobileNav';
import { SignedIn, UserButton } from '@clerk/nextjs';

function Navbar() {
  return (
    <div className='flex justify-between items-center p-5 bg-[#1c1f2e]'>
      <div className='w-full'>
        <Image src={yoomLogo} alt='working fine' width={100} height={100} />
      </div>
      <div className="hidden max-sm:block">
        <MobileNav />
      </div>
      <div>
         <SignedIn>
          <UserButton />
        </SignedIn>
      </div>
    </div>
  );
}

export default Navbar;
