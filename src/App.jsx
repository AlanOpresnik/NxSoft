import { ThemeProvider } from "@/components/theme-provider"
import { ModeToggle } from "@/components/mode-toggle"
import { Navbar } from "@/components/Navbar/Navbar"
import { GraficaHeader } from "./components/Grafica/Grafica"
import { NavbarItemNavigation } from "@/components/Navbar/NavbarItemNavigation"
import Header from "./components/Header/Header"
import EspectativaSection from "./components/espectativa/EspectativaSection"
import PricingSection from "./components/Pricing/PricingSection"
import TestimonialSection from "./components/Testimonials/TestimonialSection"
import WspLogo from "./components/WspLogo/WspLogo"
import ContactSection from "./components/Contact/ContactSection"
function App() {
  return (
    <>
      <div className="max-w-[1280px] mx-auto">

        <Navbar />
        <header className="mt-12 md:mt-24 px-6">
          <main className="grid grid-cols-1 md:grid-cols-2">
            <div className="col-span-1 mb-6 md:mb-0">

              <Header />
            </div>
            <GraficaHeader />
          </main>
        </header>
        <div className="px-6 mt-24">
          <h3 className="text-4xl font-semibold">Que vamos a <span className="text-[#fef08a]">conseguir</span></h3>
          <section className="py-6">
          <EspectativaSection/>
          </section>
          <section id="pricing" className="py-12">
          <h3 className="text-4xl font-semibold">Planes <span className="text-[#fef08a]">web </span> mas vendidos</h3>
          <PricingSection/>
          </section>
        </div>
        <section className="py-12 px-6">
        <h3 className="text-4xl font-semibold">Nuestros <span className="text-[#fef08a]">clientes </span> dicen</h3>
          <TestimonialSection/>
        </section>
        <section className="py-12 px-6">
          <ContactSection/>
        </section>
      </div>
      <WspLogo/>
    </>
  )
}

export default App