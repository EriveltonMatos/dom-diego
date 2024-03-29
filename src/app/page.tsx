import { HeroSection } from "./components/hero-section";
import { Courier_Prime } from "next/font/google";

import { AppProps } from 'next/app';

import { Footer } from "./components/footer";
import { MapsSection } from "./components/maps-section";
import { Slider } from "./components/slider";
import { ServicesSection } from "./components/services-section";


const courier = Courier_Prime ({
  subsets: ['latin'],
  weight: '400'
})

export default function Home({}) {
  return (

    <main className={courier.className}>
    <HeroSection />
    <ServicesSection />
    <Slider />
    <MapsSection />
    <Footer />
    </main>
   
  );
  
}

