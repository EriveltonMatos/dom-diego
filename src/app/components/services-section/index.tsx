import { MotionDiv } from "../motion-div";


const variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1},
}

interface Service {
    title: string;
    price: number;
    imageUrl: string; // Adicionando a propriedade imageUrl ao serviço
  }

  const ServiceCard: React.FC<Service> = ({ title, price, imageUrl }) => {
    return (
      <div className="hover:scale-110 duration-200 max-w-sm rounded overflow-hidden shadow-lg shadow-orange-400 hover:shadow-amber-200 max-sm:hover:none transition-all">
        <img className="w-full p-2 rounded-2xl service-image" src={imageUrl} alt={title} />
        <div className="px-5 py-4">
          <div className="text-center font-bold text-5xl mb-2 text-amber-200" >{title}</div>
        </div>
        <div className="flex justify-center pt- pb-5 ">
          <span className="inline-block border-2  bg-orange-800 hover:bg-orange-600 transition-colors border-orange-700 rounded-lg px-8 text-5xl py-2 font-semibold text-white mr-2"><span className="text-xl">R$</span>{price}<span className="text-xl">.00</span></span>
        </div>
      </div>
    );
  };
  

  export const ServicesSection: React.FC = () => {
    
    const services: Service[] = [
      {
        title: "CORTE DEGRADÊ",
        price: 25.00,
        imageUrl: "images/degrade.png", // URL da imagem para o serviço de corte de cabelo
      },
      {
        title: "CORTE SOCIAL",
        price: 20.00,
        imageUrl: "images/social.jpg", // URL da imagem para o serviço de barba completa
      },
      {
        title: "DEGRADÊ NAVALHADO",
        price: 30.00,
        imageUrl: "images/navalha.jpg", // URL da imagem para o pacote completo
      },
      {
        title: "BARBA COMPLETA",
        price: 20.00,
        imageUrl: "images/barba.jpg", // URL da imagem para o serviço de corte de cabelo
      },
      {
        title: "APARAR BARBA",
        price: 5.00,
        imageUrl: "images/barba2.jpg", // URL da imagem para o serviço de corte de cabelo
      },
      {
        title: "APARAR SOBRANCELHA",
        price: 5.00,
        imageUrl: "images/sobrancelha.jpg", // URL da imagem para o serviço de corte de cabelo
      },
    ];
  
    return (
      <div className="bg-black">
      <MotionDiv
        variants={variants}
        initial="hidden"
        whileInView={{ opacity:1}}
        
        transition={{
            delay: 0.5,
            ease: "easeOut",
            duration: 0.5,
        }}
        viewport={{ amount: 0 }}>
      <div id="serviços" className="flex justify-center items-center flex-col p-10 bg-black">
        <h2 className="text-6xl text-amber-200 font-bold mb-4 p-10 max-sm:text-center ">CONHEÇA NOSSOS <span className="text-white">SERVIÇOS</span></h2>
        <div className="grid grid-cols-3 gap-8 box max-sm:grid-cols-1 max-lg:grid-cols-2">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
        
      </div>
      </MotionDiv>
      </div>
   
    );
  };