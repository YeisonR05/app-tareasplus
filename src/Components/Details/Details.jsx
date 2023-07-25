import React from "react";
import { FcFinePrint, FcApproval, FcStatistics, FcIdea, FcBullish, FcCalculator } from 'react-icons/fc';
import Logo from "../../Multimedia/Logo.png";

const Details = () => {
  const subscriptionPlans = [
    {
      title: "MATEMÁTICAS",
      features: ["Matemática Básica", "Pre-Cálculo", "Trogonometría", "Cálculo Diferencial", "Cálculo Integral", "Cálculo Vectorial", "Cálculo Multivariable", "Algebra Lineal", "Ecuaciones Diferenciables", "Razonamiento Matemático"],
      icon: <FcCalculator className="text-6xl" />
    },
    {
      title: "TRABAJOS ESCRITOS",
      features: ["Artículos", "Ensayos", "Informes", "Reseñas", "Resumenes", "Correción De Normas", "Infografías", "Talleres", "Quices"],
      icon: <FcFinePrint className="text-6xl" />
    },
    {
      title: "QUÍMICA - FÍSICA",
      features: ["Química General", "Química Orgánica", "Química Inorgánica", "Bioquímica", "Química Analítica", "Física I", "Física II", "Biología General", "Microbiología"],
      icon: <FcIdea className="text-6xl mr-1" />
    },
    {
      title: "ESTADÍSTICA",
      features: ["Estadísica Descriptiva", "Estadística Inferencial", "Bioestadística", "Casos Aplicados", "Probabilidad", "Métodos Estadísticos"],
      icon: <FcStatistics className="text-6xl mr-2" />
    },
    {
      title: "ECONOMÍA",
      features: ["Microeconomía", "Macroecoconmía", "Finanzas", "Costos"],
      icon: <FcBullish className="text-6xl mr-2" />
    },
  ];

  return (
    <div className="flex flex-col items-center mb-4 mt-5">
      <div className="text-center">
        <img
          src={Logo}
          alt="TAREASPLUS"
          className="w-[100px] h-[80px] flex items-center justify-center"
        />
      </div>

      <div className="flex flex-wrap justify-center mt-8">
        {subscriptionPlans.map((plan, index) => (
          <div
            key={index}
            className="w-full md:w-[240px] lg:w-[340px] rounded-lg shadow-xl p-4 m-4 cursor-pointer bg-gray-50 hover:shadow-md flex flex-col items-center"
          >
            <div className="flex items-center">
              <div>
                {plan.icon}
              </div>
              <h2 className="text-xl font-bold text-black ml-2 text-center">
                {plan.title}
              </h2>
            </div>
            <ul className="text-black text-start mt-3">
              {plan.features.map((feature, index) => (
                <li key={index} className="mt-3 text-base">
                  <FcApproval className="inline-block mr-3" />
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Details;
