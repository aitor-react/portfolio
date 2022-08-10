import React from 'react'
import Link from 'next/link'
import Arrow from '../icons/ArrowIcon';

type LinkType = {
    label?: string;
    href?: string;
}

function IconLink({ label, href }: LinkType) {
    return (
        <Link href={'/'} >
            < a href={href}>
                <div className='flex items-center space-x-1 hover:underline'>
                    <span>
                        { label }
                    </span>
                </div>
            </ a>
        </Link >

    )
}

export default IconLink