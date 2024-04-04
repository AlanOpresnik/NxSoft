import React from 'react'
import { Button } from "@/components/ui/button"


const Header = () => {
    return (
        <div className='pr-2 pt-6'>
            <h3 className='text-2xl  font-semibold text-[#fef08a]'>NxSoft</h3>
            <h3 className='text-5xl font-semibold'>Convertimos tus ideas en <span className='text-[#fef08a]'>realidad</span></h3>
            <p className='py-2  text-muted-foreground'>En NxSoft buscamos brindar la mejor  <span className='text-[#fef08a]'>calidad</span>  en nuestros servicios, tenemos un grupo de <span className='text-[#fef08a]'>programadores</span> expertos en sitios web para Empresas, Pymes, Portfolios o <span className='text-[#fef08a]'></span>sistemas mas<span className='text-[#fef08a]'> complejos</span>.</p>
            <div className='mt-4 flex gap-4'>
            <Button variant="outline">Ver planes</Button>
            <Button>¿Que opina la gente?</Button>
            </div>
        </div>
    )
}

export default Header