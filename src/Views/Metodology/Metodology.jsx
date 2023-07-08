import React from "react";
import FotoMetodology from "../../Multimedia/FotoMetodology.png";
import { BsCheckCircle } from 'react-icons/bs';

const Metodology = () => {
  const subscriptionPlans = [
    {
      title: "¿CÓMO LO HACEMOS?",
      text: ["En Tareas Plus encontrarás ayuda de tutores expertos en trabajos universitarios. Servicios académicos, con resultado garantizado."],
      features: ["Cotizas con nuestro equipo", "Envías toda la información de lo que necesitas", "Recibes la cotización de lo solicitado", "Realizas el pago", "Recibes lo solicitado"],
      icon: <BsCheckCircle />
    },
  ];

  const handleWhatsApp = () => {
    const phoneNumber = "+573177619058";
    const message = "Hola";
    const url = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  return (
    <div className="flex flex-col md:flex-row">
      <div className="md:w-1/2">
        <div className="p-4">
          <div className="w-full h-[300px] md:h-[550px] mx-autocursor-pointer">
              <img
                src={FotoMetodology}
                alt="TAREASPLUS"
                className="object-contain w-full h-auto"
              />
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center mt-8 md:mt-0 md:w-1/2">
        {subscriptionPlans.map((plan, index) => (
          <div
            key={index}
            className="w-full h-auto p-4 cursor-pointer mb-8 md:max-w-md"
          >
            <div className="flex items-center">
              <h2 className="text-4xl font-bold text-black text-teal-600 mt-6">
                {plan.title}
              </h2>
            </div>
            <ul className="text-md text-black text-start mt-4">
              {plan.text.map((text, index) => (
                <li key={index} className="mt-2">
                  {text}
                </li>
              ))}
            </ul>
            <ul className="text-black text-start mt-2">
              {plan.features.map((feature, index) => (
                <li key={index} className="mt-6 text-xl flex items-center">
                  <BsCheckCircle className="inline-block mr-3 rounded-full bg-[#18E4BE]" />
                  {feature}
                </li>
              ))}
            </ul>
            <div>
              <button
                className="bg-teal-600 hover:bg-[#139980] text-black font-bold py-2 px-4 rounded mt-8"
                onClick={handleWhatsApp}
              >
                COTIZA CON NOSOTROS
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Metodology;




