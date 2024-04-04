/**
 * This code was generated by v0 by Vercel.
 * @see https://v0.dev/t/IQcjgIrEu6u
 */
import { CardTitle, CardDescription, CardHeader, CardContent, CardFooter, Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import React from "react"
export function Pricing() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-24">
      <div className="container grid md:grid-cols-3 gap-6 px-2 md:px-6">
        <Card className="bg-white shadow-sm dark:bg-gray-950 dark:border-gray-800">
          <CardHeader>

            <CardTitle>Basico</CardTitle>
            <CardDescription>Para portfolios o paginas estaticas</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <span className="text-4xl font-bold">$79,999</span>
              <span className="text-gray-500 dark:text-gray-400">/unico pago</span>
            </div>
            <ul className="space-y-2 text-gray-500 dark:text-gray-400">

              <li className="flex items-center">
                <CheckIcon className="h-4 w-4 mr-2 text-green-500" />
                Secciones a eleccion del cliente
              </li>
              <li className="flex items-center">
                <CheckIcon className="h-4 w-4 mr-2 text-green-500" />
                Watshapp en la web
              </li>
              <li className="flex items-center">
                <CheckIcon className="h-4 w-4 mr-2 text-green-500" />
                Contacto constante con el diseñador
              </li>
              <li className="flex items-center">
                <CheckIcon className="h-4 w-4 mr-2 text-green-500" />
                Formulario de contacto
              </li>
              <li className="flex items-center">
                <CheckIcon className="h-4 w-4 mr-2 text-green-500" />
                Dominio .com / .com.ar
              </li>
              <li className="flex items-center">
                <XIcon className="h-4 w-4 mr-2 text-red-500" />
                Mercado pago
              </li>
              <li className="flex items-center">
                <CheckIcon className="h-4 w-4 mr-2 text-green-500" />
                SSL
              </li>
              <li className="flex items-center">
                <XIcon className="h-4 w-4 mr-2 text-red-500" />
                Panel de administracion
              </li>
              <li className="flex items-center">
                <XIcon className="h-4 w-4 mr-2 text-red-500" />
                Cupones para comprar en la web
              </li>
              <li className="flex items-center">
                <XIcon className="h-4 w-4 mr-2 text-red-500" />
                Sistema de cotizacion envios
              </li>
              <li className="flex items-center">
                <XIcon className="h-4 w-4 mr-2 text-red-500" />
                Base de datos
              </li>
              <li className="flex items-center">
                <CheckIcon className="h-4 w-4 mr-2 text-green-500" />
                Modificaciones a la pagina una vez subida (costo aparte)
              </li>
              <li className="flex items-center">
                <CheckIcon className="h-4 w-4 mr-2 text-green-500" />
                SEO
              </li>
              <li className="flex items-center">
                <CheckIcon className="h-4 w-4 mr-2 text-green-500" />
                Videos en la pagina web
              </li>
            </ul>
          </CardContent>
          <CardFooter>
            <Button variant="outline">Consultar por Plan basico</Button>
          </CardFooter>
        </Card>
        <Card className="bg-white shadow-sm relative top-0 md:top-[-40px] dark:bg-gray-950 dark:border-gray-800">
          <CardHeader>
            <p className="text-[#fef08a] text-sm">Mas vendido</p>
            <CardTitle>Intermedio</CardTitle>
            <CardDescription>Para tiendas, comercios y emprendimientos</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <span className="text-4xl font-bold">$299,000</span>
              <span className="text-gray-400">/unico pago</span>
            </div>
            <ul className="space-y-2 text-gray-500 dark:text-gray-400">
              <li className="flex items-center">
                <CheckIcon className="h-4 w-4 mr-2 text-green-500" />
                Compras dentro de la web
              </li>
              <li className="flex items-center">
                <CheckIcon className="h-4 w-4 mr-2 text-green-500" />
                Panel de administracion
              </li>
              <li className="flex items-center">
                <CheckIcon className="h-4 w-4 mr-2 text-green-500" />
                Mercado pago
              </li>
              <li className="flex items-center">
                <CheckIcon className="h-4 w-4 mr-2 text-green-500" />
                Secciones a eleccion del cliente
              </li>
              <li className="flex items-center">
                <CheckIcon className="h-4 w-4 mr-2 text-green-500" />
                Watshapp en la web
              </li>
              <li className="flex items-center">
                <CheckIcon className="h-4 w-4 mr-2 text-green-500" />
                Contacto constante con el diseñador
              </li>
              <li className="flex items-center">
                <CheckIcon className="h-4 w-4 mr-2 text-green-500" />
                Formulario de contacto
              </li>
              <li className="flex items-center">
                <CheckIcon className="h-4 w-4 mr-2 text-green-500" />
                Dominio .com / .com.ar
              </li>
              <li className="flex items-center">
                <CheckIcon className="h-4 w-4 mr-2 text-green-500" />
                SSL
              </li>

              <li className="flex items-center">
                <XIcon className="h-4 w-4 mr-2 text-red-500" />
                Graficas de ventas
              </li>
              <li className="flex items-center">
                <CheckIcon className="h-4 w-4 mr-2 text-green-500" />
                Sistema de cotizacion de envios
              </li>
              <li className="flex items-center">
                <XIcon className="h-4 w-4 mr-2 text-red-500" />
                transferencias bancarias
              </li>

              <li className="flex items-center">
                <CheckIcon className="h-4 w-4 mr-2 text-green-500" />
                Cupones para comprar en la web
              </li>
              <li className="flex items-center">
                <CheckIcon className="h-4 w-4 mr-2 text-green-500" />
                Base de datos
              </li>
              <li className="flex items-center">
                <CheckIcon className="h-4 w-4 mr-2 text-green-500" />
                Modificaciones a la pagina una vez subida
              </li>
              <li className="flex items-center">
                <CheckIcon className="h-4 w-4 mr-2 text-green-500" />
                SEO
              </li>
              <li className="flex items-center">
                <CheckIcon className="h-4 w-4 mr-2 text-green-500" />
                Videos en la pagina web
              </li>
            </ul>
          </CardContent>
          <CardFooter>
            <Button variant="outline">Consultar sobre plan intermedio</Button>
          </CardFooter>
        </Card>
        <Card className="bg-white shadow-sm dark:bg-gray-950 dark:border-gray-800">
          <CardHeader>
            <CardTitle>Experto (sitio web a medida)</CardTitle>
            <CardDescription> proyectos grandes, tiendas ya formadas que buscan un sistema complejo a medida</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <span className="text-4xl font-bold">Cotiza el tuyo</span>
              <span className="text-gray-500 dark:text-gray-400">/unico pago</span>
            </div>
            <ul className="space-y-2 text-gray-500 dark:text-gray-400">
              <li className="flex items-center">
                <CheckIcon className="h-4 w-4 mr-2 text-green-500" />
                Compras dentro de la web
              </li>
              <li className="flex items-center">
                <CheckIcon className="h-4 w-4 mr-2 text-green-500" />
                Panel de administracion
              </li>
              <li className="flex items-center">
                <CheckIcon className="h-4 w-4 mr-2 text-green-500" />
                Sistema mobile para manejar la web
              </li>
              <li className="flex items-center">
                <CheckIcon className="h-4 w-4 mr-2 text-green-500" />
                Mercado pago
              </li>
              <li className="flex items-center">
                <CheckIcon className="h-4 w-4 mr-2 text-green-500" />
                Secciones a eleccion del cliente
              </li>
              <li className="flex items-center">
                <CheckIcon className="h-4 w-4 mr-2 text-green-500" />
                Watshapp en la web
              </li>
              <li className="flex items-center">
                <CheckIcon className="h-4 w-4 mr-2 text-green-500" />
                Contacto constante con el diseñador
              </li>
              <li className="flex items-center">
                <CheckIcon className="h-4 w-4 mr-2 text-green-500" />
                Formulario de contacto
              </li>
              <li className="flex items-center">
                <CheckIcon className="h-4 w-4 mr-2 text-green-500" />
                Dominio .com / .com.ar
              </li>
              <li className="flex items-center">
                <CheckIcon className="h-4 w-4 mr-2 text-green-500" />
                SSL
              </li>

              <li className="flex items-center">
                <CheckIcon className="h-4 w-4 mr-2 text-green-500" />
                Graficas de ventas
              </li>
              <li className="flex items-center">
                <CheckIcon className="h-4 w-4 mr-2 text-green-500" />
                Sistema de cotizacion de envios
              </li>
              <li className="flex items-center">
                <CheckIcon className="h-4 w-4 mr-2 text-green-500" />
                transferencias bancarias
              </li>

              <li className="flex items-center">
                <CheckIcon className="h-4 w-4 mr-2 text-green-500" />
                Cupones para comprar en la web
              </li>
              <li className="flex items-center">
                <CheckIcon className="h-4 w-4 mr-2 text-green-500" />
                Base de datos
              </li>
              <li className="flex items-center">
                <CheckIcon className="h-4 w-4 mr-2 text-green-500" />
                Modificaciones a la pagina una vez subida
              </li>
              <li className="flex items-center">
                <CheckIcon className="h-4 w-4 mr-2 text-green-500" />
                SEO
              </li>
              <li className="flex items-center">
                <CheckIcon className="h-4 w-4 mr-2 text-green-500" />
                Videos en la pagina web
              </li>
            </ul>
          </CardContent>
          <CardFooter>
            <Button variant="outline">Consultar sobre el plan Experto</Button>
          </CardFooter>
        </Card>
      </div>
    </section>
  )
}


function CheckIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="20 6 9 17 4 12" />
    </svg>
  )
}


function XIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  )
}