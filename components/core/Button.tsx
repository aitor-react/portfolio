import React from 'react'

type ButtonType = {
    lable: string
}

function Button({ lable }: ButtonType) {
    return (
        
            <button 

                className='text-lg font-semibold opacity-60 hover:opacity-100 hover:translate-x-1 transition duration-300'>
                   <a href="https://www.github.com/aitor-react" rel=" noopener noreferrer" target='_blank'>{lable}</a>

            </button>
        
    )
}

export default Button