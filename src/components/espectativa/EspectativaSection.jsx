import React from 'react';
import GoogleIcon from '@mui/icons-material/Google';
import EspectativaItem from './EspectativaItem';
import ImportantDevicesIcon from '@mui/icons-material/ImportantDevices';
import EngineeringIcon from '@mui/icons-material/Engineering';
import AddReactionIcon from '@mui/icons-material/AddReaction';
const EspectativaSection = () => {
    const espects = [
        {
            image: <GoogleIcon />,
            title: "SEO",
            description: "Vas a tener mas visibilidad en Google, tus paginas estaran en el primer lugar de busqueda"
        },
        {
            image: <ImportantDevicesIcon />,
            title: "Ecommerce",
            description: "Vas a tener un sitio web profesional de ventas y administracion para tu negocio"
        },
        {
            image: <EngineeringIcon  />,
            title: "Asesoramiento",
            description: "tenes asesoramiento uno a uno con los diseñadores de tu pagina web para cumplir tus expectativas"
        },
        {
            image: <AddReactionIcon />,
            title: "Simpleza",
            description: "Es simple. Los clientes buscan, te encuentran, te contactan, vendés."
        }
    ]
    return (
        <div className='mt-2 flex flex-wrap justify-center  w-full gap-6 items-center py-2'>
            {espects.map((espect, index) => (
                <EspectativaItem 
                    key={index} 
                    title={espect.title} 
                    description={espect.description} 
                    image={espect.image}
                />
            ))}
        </div>
    )
}

export default EspectativaSection;
