import Image from "next/image";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import 'animate.css';


export const HeroSection = () => {
  return (
    <section className="">
      <nav className="bg-black p-2 fixed top-0 z-50 w-full opacity-80 max-sm:hidden">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center">
            <a href="#">
              <img className="h-12 rounded-full brightness-200" src="/images/logo.png" alt="logo pequena" />
            </a>
          </div>
          <div className="hidden md:block">
            <div className="flex items-center space-x-4 ">
              <a href="#" className="navt text-amber-100 hover:text-white transition-colors ">
                Home
              </a>
              <a href="#serviços" className="navt text-amber-100 hover:text-white transition-colors ">
                Serviços
              </a>
              <a href="#avaliações" className="navt text-amber-100 hover:text-white transition-colors">
                Avaliações
              </a>
              <a href="#mapa" className=" navt text-amber-100 hover:text-white transition-colors">
                Localização
              </a>
            </div>
          </div>
        </div>
      </nav>

      <div className="shadow-orange-950 shadow-2xl mx-auto lg:justify-center relative py-20 flex sm:flex-col-reverse max-md:flex-col-reverse items-center ">
      <div className=" absolute inset-0 bg-[url('/images/barbearia.jpg')] w-full bg-cover bg-hero-image bg-center"></div>
        <div className="absolute inset-0 bg-black opacity-70 z-10 "></div>
        <div className=" animate__animated animate__fadeInLeft relative z-10 md:w-1/2 mb-2 ">
          <p className="p-5 text-5xl text-center font-sans text-amber-100 font-extrabold max-sm:text-center max-sm:text-3xl max-lg:text-3xl 2xl:p-10 2xl:text-5xl 2xl:text-center">
            O SEU DESTINO PARA ESTILO E ELEGÂNCIA MASCULINA COM UM PREÇO JUSTO E SERVIÇOS DE ALTA QUALIDADE
          </p>
          <div className="flex justify-center max-sm:flex-col max-sm:space-y-5 max-sm:space-x-0 items-center space-x-4 max-lg:flex-col max-lg:space-y-5">
            <button className="space-x-2  border-2 border-orange-700 hover:bg-orange-800 text-white font-bold py-2 px-4 rounded transition-colors">
              <div className="flex items-center space-x-2">
                <FaWhatsapp />
                <p>Agende um horário</p>
              </div>
            </button>
            <button className="space-x-2 border-2 border-orange-700 hover:bg-orange-800 text-white font-bold py-2 px-4 rounded transition-colors">
              <div className="flex items-center space-x-2">
                <FaInstagram />
                <p>Acesse nosso Instagram</p>
              </div>
            </button>
          </div>
          <p className=" p-8 flex justify-center font-sans text-gray-400 max-sm:text-center">
            Estamos localizados na Av. Bezerra de Menezes - Farias Brito,
            Fortaleza - CE, 60015-340
          </p>
        </div>

        <div className="relative z-10 md:w-1/2 flex justify-center">
          <Image
            width={450}
            height={450}
            src="/images/logo.png"
            alt="Descrição da imagem"
            className="animate__animated animate__fadeInRight rounded-full brightness-200 max-sm:mt-1 max-sm:w-120 max-sm:h-80 max-md:w-80 max-md:h-80 "
          />
        </div>
        
      </div>
    </section>
    
  );
};
