import {
    Card,
    CardBody,
    Typography,
    CardHeader,
} from "@material-tailwind/react";

function TestimonialCard({ img, client, title, clientInfo, link }) {
    return (
        <Card shadow={false} className="bg-gray-100/50 dark:bg-transparent border rounded-2xl p-6">
            <CardHeader color="transparent" floated={false} shadow={false}>
                <Typography

                    className="lg:mb-16 mb-4 text-2xl text-gray-700 dark:text-white font-bold"
                >
                    &quot;{title}&quot;
                </Typography>
            </CardHeader>
            <CardBody className="px-0 md:px-4 py-0 flex flex-wrap-reverse gap-x-6 justify-between items-center">
                <div>
                    <Typography variant="h6" color="blue-gray">
                        {client}
                    </Typography>
                    <Typography
                        variant="paragraph"
                        className="font-normal mb-4 !text-gray-500"
                    >
                        {clientInfo}
                    </Typography>
                    <a
                        target="_BLANK"
                        href={link}
                        variant="paragraph"
                        className="font-normal      underline rounded-full  !text-gray-500"
                    >
                        visitar pagina web

                    </a>
                </div>
                <img src={img} className="max-w-[8rem]" alt={client} />
            </CardBody>
        </Card>
    );
}

const testimonials = [
    {
        title:
            "Muy feliz de poder tener mi portfolio en linea y con todas las funcionalidades que pedi, hasta un visor de espacios 3D en la pagina, el diseño muy moderno y agradable, muy recomendados",
        client: "Matias Robles",
        clientInfo: "Founder RoblesRender",
        img: "https://roblesrender.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FlogoPng.0b2e58d5.png&w=256&q=75",
        link: "https://roblesrender.com"
    },
    {
        title:
            "Estamos muy contentos con el sitio web, el diseñador estuvo siempre pendiente de lo que queriamos lograr y transimitir con el diseño, el panel de administracion super intuitivo y funciona todo en tiempo real",
        client: "Lorena palmieri",
        clientInfo: "Fundadora de Lore Cunas",
        img: "https://www.lorecunas.com.ar/assets/logo-c11c7a1b.png",
        link: "https://lorecunas.com.ar"
    },
];

export function TestimonialSection() {
    return (
        <section className="px-0 py-10 lg:py-18">
            <div className=" px-0 md:px-6 mx-auto">

                <div className="grid gap-8 grid-cols-1 lg:grid-cols-2">
                    {testimonials.map((props, key) => (
                        <TestimonialCard key={key} {...props} />
                    ))}
                </div>

                <Card
                    shadow={false}
                    className="mt-8 border bg-gray-100/50 dark:bg-transparent text-center rounded-2xl p-6"
                >
                    <CardHeader color="transparent" floated={false} shadow={false}>
                        <Typography
                         
                            className="mb-4 !text-2xl text-gray-700 dark:text-white lg:!text-2xl max-w-4xl !leading-snug mx-auto font-bold"
                        >
                            &quot;Los chicos de NxSoft hicieron realidad mi idea de tener un miniMarket autonomo&apos; Programaron un sistema complejo y una aplicacion mobile para android e ios que permite comprar y validar todo desde ahi, 100% recomendables&quot;
                        </Typography>
                    </CardHeader>
                    <CardBody className="items-center mx-auto py-2">
                        <img
                            src="https://a365.com.ar/static/media/newlogo365.34a127339c5803dd1aa9.png"
                            className="max-w-[8rem] mx-auto "
                            alt="spotify"
                        />
                        <Typography variant="h6" color="blue-gray">
                            Emma Roberts
                        </Typography>
                        <Typography
                            variant="paragraph"
                            className="font-normal !text-gray-500"
                        >
                            Founder de AutoShop-365
                        </Typography>

                    </CardBody>
                    <a
                        target="_BLANK"
                        href="https://a365.com.ar/"
                        variant="paragraph"
                        className="font-normal      underline rounded-full  !text-gray-500"
                    >
                        visitar pagina web

                    </a>
                </Card>
            </div>
        </section>
    );
}

export default TestimonialSection;