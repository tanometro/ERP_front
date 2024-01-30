'use client';

import React from 'react'
import Image from 'next/image';
import AuthButton from './Buttons/AuthButton';
import { useSession } from 'next-auth/react';

const Navbar = () => {
    const {data: session} = useSession();
    
  return (
    <div>
        <div>
            <Image
            src="/logoBit.svg"
            alt="Logo Bitecnologias"
            width={180}
            height={37}
            priority
            />
        </div>
        <div>
            <input
            type='search'
            />
        </div>
        <div>
            <AuthButton/>
        </div>
    </div>
  )
}

export default Navbar