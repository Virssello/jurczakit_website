import Image from 'next/image'
import Link from 'next/link'
import React from 'react';

export const Header=(
)=>(<>
    <div className="header">
            <h1>
            <Image src="/logoJurczakIt.png" alt="jurczakit Logo" width={150} height={150} />
                Jurczak.it
            </h1>
        </div>
        <div className="menu">
            <Link href="/">Home</Link>
            <Link href="/contact">Contact</Link>
        </div>
</>
)