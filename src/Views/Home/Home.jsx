import React from "react";
import FotoHome from "../../Multimedia/FotoHome.png";

const Home = () => {
  const subscriptionPlans = [
    {
      title: "TAREAS PLUS",
      text: ["¡LO HACEMOS POR TI!"],
      features: ["En Tareas Plus, puedes contar con el respaldo de tutores especializados que te brindarán asistencia académica personalizada. Nos enfocamos en ayudarte con tus trabajos y proyectos universitarios, ofreciéndote un servicio confiable y garantizado."],
    },
  ];

  return (
    <div className="flex flex-col md:flex-row">
      <div className="w-full md:w-1/2 p-12">
        <div className="flex flex-col items-start justify-center">
          {subscriptionPlans.map((plan, index) => (
            <div
              key={index}
              className="w-full h-auto md:h-[450px] p-4"
            >
              <div className="flex items-center">
                <h2 className="text-5xl md:text-7xl font-bold text-black text-teal-600 mt-6">
                  {plan.title}
                </h2>
              </div>
              <ul className="text-black text-start">
                {plan.text.map((text, index) => (
                  <li key={index} className="mt-2 text-xl md:text-2xl text-teal-600">
                    {text} 
                  </li>
                ))}
              </ul>
              <ul className="text-black text-start mt-2">
                {plan.features.map((feature, index) => (
                  <li key={index} className="mt-6 text-base md:text-lg text-justify">
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="w-full md:w-1/2">
        <div className="p-4">
          <div className="w-full h-[300px] md:h-[550px] p-4 mx-auto">
            <img
              src={FotoHome}
              alt="TAREASPLUS"
              className="object-contain w-full h-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
