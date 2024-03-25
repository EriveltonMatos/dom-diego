import { HeroSection } from "./components/hero-section/page";
import { Courier_Prime } from "next/font/google";
import { ServicesSection } from "./components/services-section/page";
import { PrimeReactProvider, PrimeReactContext } from 'primereact/api';
import { AppProps } from 'next/app';
import { Slider } from "./components/slider/page";
import { MapsSection } from "./components/maps-section/page";
import { Footer } from "./components/footer/page";


<script src="node_modules/keen-slider/keen-slider.js"></script>


const courier = Courier_Prime ({
  subsets: ['latin'],
  weight: '400'
})



export default function Home({ Component, pageProps }: AppProps) {
  return (
   
    <PrimeReactProvider>
    
    <main className={courier.className}>
    <HeroSection />
    <ServicesSection />
    <Slider />
    <MapsSection />
    <Footer />
    </main>
   
  </PrimeReactProvider>
   
  );
  
}

