import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { FcFinePrint, FcQuestions, FcRatings } from 'react-icons/fc';
import { FcApproval } from 'react-icons/fc';
import Details from "../../Components/Details/Details";

const Services = () => {
  const [showDetails, setShowDetails] = useState(false);
  const detailsRef = useRef(null); 

  const subscriptionPlans = [
    {
      title: "PARCIALES",
      features: ["Parciales que se realizan en distintos momentos del trascurso del semestre."],
      features2: ["Atención Personalizada", "Contacto Directo", "Comunicación Constante", "Tutores Calificados", "Confidencialidad Y Privacidad"],
      icon: <FcRatings className="text-7xl" />
    },
    {
      title: "TRABAJOS / TALLERES",
      features: ["Trabajos que deben realizar los estudiantes en sus hogares para ser entregadas."],
      features2: ["Atención Personalizada", "Correciones y Edición", "Comunicación Constante", "Garantía De Nota", "Confidencialidad Y Privacidad"],
      icon: <FcFinePrint className="text-7xl" />
    },
    {
      title: "QUICES",
      features: ["Pruebas sencillas para evaluar un contenido, conocimiento de un tema."],
      features2: ["Atención Personalizada", "Contacto Directo", "Comunicación Constante", "Tutores Calificados", "Confidencialidad Y Privacidad"],
      icon: <FcQuestions className="text-7xl" />
    },
  ];

  const handleShowDetails = () => {
    setShowDetails(true);
    detailsRef.current.scrollIntoView({ behavior: 'smooth' }); 
  };

  return (
    <div className="flex flex-col items-center mb-4 mt-5">
      <div className="">
        <h1 className="font-bold text-black">SERVICIO DE APOYO ACADÉMICO</h1>
        <p className="bg-gray-30 font-bold text-3xl mt-4 text-teal-600">
          TAREAS PLUS 
        </p>
        <p className="bg-gray-30 font-bold text-black text-teal-600">
          Lo hacemos por ti
        </p>
      </div>

      <div className="flex justify-center mt-8">
        {subscriptionPlans.map((plan, index) => (
          <div
            key={index}
            className="w-[350px] h-[450px] rounded-lg shadow-xl p-4 mx-8 cursor-pointer bg-gray-50 hover:shadow-md flex flex-col items-start"
          >
            <div className="flex items-center">
              <div>
                {plan.icon}
              </div>
              <h2 className="text-lg font-bold text-black">
                {plan.title}
              </h2>
            </div>
            <ul className="text-black text-start">
              {plan.features.map((feature, index) => (
                <li key={index} className="mt-4">
                  {feature}
                </li>
              ))}
              {plan.features2.map((feature, index) => (
                <li key={index} className="mt-4">
                  <FcApproval className="inline-block mr-3" />
                  {feature}
                </li>
              ))}
            </ul>
            <Link to="" onClick={handleShowDetails}>
              <button
                className="bg-[#18E4BE] hover:bg-[#139980] text-black font-bold py-2 px-4 rounded mt-8"
              >
                Ver Detalles
              </button>
            </Link>
          </div>
        ))}
      </div>
      <div ref={detailsRef}>
        {showDetails && <Details />}
      </div>
    </div>
  );
};

export default Services;
