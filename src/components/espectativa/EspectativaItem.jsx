import { Icon } from '@mui/material'
import React from 'react'

const EspectativaItem = ({ title, image, description }) => {
    return (
        <div className='border rounded-lg flex flex-col items-center w-[170px] h-[300px] md:w-[290px]  md:h-[200px] justify-center p-6'>
            <div>
                {image}
            </div>
            <div className='flex flex-col items-center'>
                <h2 className='text-xl font-bold py-2'>{title}</h2>
                <p>{description}</p>
            </div>
        </div>
    )
}

export default EspectativaItem