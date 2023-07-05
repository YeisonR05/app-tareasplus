import React, { useState } from "react";
import { FcApproval } from 'react-icons/fc';
import Warranty from "../../Components/Warranty/Warranty";

const PricesWarranty = () => { 
  const subscriptionPlans = [
    {
      title: "PARCIALES",
      price: { usd: "$60 mil - 100 mil" },
      features: [ "Personal Calificado", "Servicio Personalizado", "Resultados Garantizados", "Garantía En Tus Parciales", "Confidencialidad" ],
    },
    {
      title: "TRABAJOS / TALLERES",
      price: { usd: "Variable" },
      features: ["Personal Calificado", "Servicio Personalizado", "Resultados Garantizados", "Garantía En Tus Trabajos", "Confidencialidad"],
    },
    {
      title: "QUICES",
      price: { usd: "$ 30 mil - 50 mil" },
      features: ["Personal Calificado", "Servicio Personalizado", "Resultados Garantizados", "Garantía En Tus Quices", "Confidencialidad"],
    },
  ];

  const [selectedPlan] = useState(null);
  const [selectedCurrency] = useState("usd");

  const handleWhatsApp = () => {
    const phoneNumber = "+573177619058"; 
    const message = "Hola"; 
    const url = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  return (
    <div className="flex flex-col items-center mb-4 mt-3 ">
      <div className="">
        <h1 className="font-bold text-black">LOS PRECIOS DE TAREAS PLUS</h1>
        <p className="font-bold text-2xl text-black">
          Se ajustan al desarrollo de tus trabajos
        </p>
      </div>

      <div className="flex justify-center mt-12 border-b border-black">
        {subscriptionPlans.map((plan, index) => (
          <div
            key={index}
            className="w-[330px] h-[440px] rounded-lg shadow-xl p-6 mx-6 cursor-pointer bg-gray-50  hover:shadow-md mb-8"
          >
            <h2 className="text-lg font-bold mb-4 ml-0 text-left text-black">
              {plan.title}
            </h2>
            <div className="text-left pb-5">
              <span className="text-3xl font-bold text-black border-b border-black pb-3 ">
                {plan.price[selectedCurrency]}
              </span>
            </div>
            <ul className="mt-8 text-black text-start">
              {plan.features.map((feature, index) => (
                <li key={index} className="mt-4">
                  <FcApproval className="inline-block mr-3" />
                  {feature}
                </li>
              ))}
            </ul>
            <button
              className="bg-[#18E4BE] hover:bg-[#139980] text-black font-bold py-2 px-10 rounded mt-12"
              onClick={handleWhatsApp}
            >
              {selectedPlan === index ? "ESCRÍBENOS" : "ESCRÍBENOS"}
            </button>
          </div>
        ))}
      </div>
      <div className="mt-2">
        <Warranty />
      </div>
    </div>
  );
};

export default PricesWarranty;

