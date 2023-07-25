import React from "react";
import FotoHome from "../../Multimedia/FotoHome.png";
import Services from "../Services/Services";
import Metodology from "../Metodology/Metodology";
import PricesWarranty from "../Prices-Warranty/Prices-Warranty";
import About from "../About/About";


const Home = () => {
  const subscriptionPlans = [
    {
      title: "TAREAS PLUS",
      text: ["¡LO HACEMOS POR TI!"],
      features: ["En Tareas Plus, puedes contar con el respaldo de tutores especializados que te brindarán asistencia académica personalizada. Nos enfocamos en ayudarte con tus trabajos y proyectos universitarios, ofreciéndote un servicio confiable y garantizado."],
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-1">
        <div className="flex flex-col md:flex-row">
          <div className="w-full md:w-1/2 md:p-6">
            <div className="flex flex-col items-start justify-center">
              {subscriptionPlans.map((plan, index) => (
                <div key={index} className="w-full h-auto md:h-[450px] p-4">
                  <div className="flex items-center">
                    <h2 className="text-5xl md:text-7xl font-bold text-black text-teal-600 mt-4">
                      {plan.title}
                    </h2>
                  </div>
                  <ul className="text-black text-start mt-4">
                    {plan.text.map((text, index) => (
                      <li key={index} className="mt-2 text-xl md:text-2xl text-teal-600">
                        {text} 
                      </li>
                    ))}
                  </ul>
                  <ul className="text-black text-start mt-2">
                    {plan.features.map((feature, index) => (
                      <li key={index} className="mt-4 text-base md:text-lg text-justify">
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
          <div className="w-full md:w-1/2">
            <div className="">
              <div className="w-full h-[300px] md:h-[550px] mx-auto">
                <img
                  src={FotoHome}
                  alt="TAREASPLUS"
                  className="object-contain w-full h-full"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-10 bg-gray-100">
        <Services />
      </div>
      <div lassName="mt-10">
        <Metodology />
      </div>
      <div className="mt-10 bg-gray-100">
        <PricesWarranty />
      </div>
      <div className="mt-10">
        <About />
      </div>
    </div>
  );
}

export default Home;

