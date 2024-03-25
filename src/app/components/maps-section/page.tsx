import { FaWhatsapp } from "react-icons/fa";

export const MapsSection = () => {
  return (
    <div id="mapa" className="relative bg-black">
      <div className="absolute inset-0 z-0  opacity-30 bg-[url('/images/barbearia2.jpg')] bg-cover bg-center"></div>
      <div className="flex justify-center items-center flex-col p-20 z-10 relative">
        <div>
          <iframe className="max-sm:w-[300px] max-sm:h-80 " src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d127403.54838467942!2d-38.68863344192505!3d-3.731273705969383!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7c749a5a2d2a5ed%3A0x9dfa3c48ce8fb219!2sBarbearia%20Dom%20Diego!5e0!3m2!1spt-BR!2sbr!4v1709771540455!5m2!1spt-BR!2sbr" width="800" height="450" loading="lazy"></iframe>
        </div>
        <div className="p-10">
          <h1 className=" flex justify-center text-6xl text-white font-semibold max-sm:text-3xl text-center p-2">ESTAMOS LOCALIZADOS NA:</h1>
          <p className="text-3xl text-amber-100 max-sm:text-center">AV. BEZERRA DE MENEZES - FARIAS BRITO, FORTALEZA - CE, 60015-340</p>
        </div>
        <div className="flex items-center space-x-20 max-sm:flex-col max-sm:space-y-6 max-sm:justify-center max-sm:space-x-0">
          <button className=" border-2 border-orange-700 hover:bg-orange-800 text-white font-bold py-2 px-4 h-full rounded transition-colors">
            <div className="flex items-center space-x-2 ">
              <FaWhatsapp />
              <p>Agende um horário</p>
            </div>
          </button>
          <img className="w-20 rounded-full brightness-200" src="/images/logo.png" alt="logo pequena" />
        </div>
      </div>
    </div>
  );
};