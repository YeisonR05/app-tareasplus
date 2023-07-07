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
      <div className="text-center">
        <h1 className="font-bold text-black text-2xl lg:text-4xl">SERVICIO DE APOYO ACADÉMICO</h1>
        <p className="bg-gray-300 font-bold text-xl lg:text-3xl mt-4 text-teal-600">
          TAREAS PLUS
        </p>
        <p className="bg-gray-300 font-bold text-black text-xl lg:text-3xl text-teal-600">
          Lo hacemos por ti
        </p>
      </div>

      <div className="flex flex-wrap justify-center mt-8">
        {subscriptionPlans.map((plan, index) => (
          <div
            key={index}
            className="w-full md:w-[350px] lg:w-[450px] rounded-lg shadow-xl p-4 m-4 cursor-pointer bg-gray-50 hover:shadow-md flex flex-col items-center"
          >
            <div className="flex items-center">
              <div>
                {plan.icon}
              </div>
              <h2 className="text-lg font-bold text-black ml-2 text-center">
                {plan.title}
              </h2>
            </div>
            <ul className="text-black text-start mt-4">
              {plan.features.map((feature, index) => (
                <li key={index} className="mt-2 text-sm lg:text-base">
                  {feature}
                </li>
              ))}
              {plan.features2.map((feature, index) => (
                <li key={index} className="mt-2 text-sm lg:text-base flex items-center">
                  <FcApproval className="inline-block mr-3" />
                  {feature}
                </li>
              ))}
            </ul>
            <Link to="" onClick={handleShowDetails}>
              <button
                className="bg-teal-600 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded mt-8"
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

