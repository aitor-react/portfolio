import React from 'react'

type LinkType = {
    label?: string;
}

function IconLink({ label }: LinkType) {
    return (
            <>
            
                <div className='flex items-center space-x-1 hover:underline'>
                    <span>
                        { label }
                    </span>
                </div>
            </>   
        

    )
}

export default IconLink