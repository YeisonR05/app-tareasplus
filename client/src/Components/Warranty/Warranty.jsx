import React from "react";
import { BsCheckCircle } from 'react-icons/bs';
import { MdOutlineErrorOutline } from 'react-icons/md';

const Warranty = () => { 
  const subscriptionPlans = [
    {
      title: "ENTRE 3.0 Y 5.0",
      features: ["La garantía no se aplica en este caso, ya que nuestra política de garantía establece que solo es válida cuando la calificación obtenida es inferior a 3.0. No obstante, nuestro objetivo siempre es obtener la calificación más alta posible. 📝"],
      icon: <BsCheckCircle className="text-6xl rounded-full bg-[#18E4BE]" />
    },
    {
      title: "MENOS DE 2.9",
      features: ["En caso de no cumplir con el objetivo de nuestros servicios, ofrecemos un reembolso completo para asegurar tu satisfacción. Además, nos comprometemos a analizar cuidadosamente cualquier retroalimentación recibida y enfocarnos en mejoras significativas en futuras interacciones para brindarte una experiencia aún más satisfactoria. 📝"],
      icon: <MdOutlineErrorOutline className="text-6xl rounded-full bg-[#FF0000]" />
    },
  ];

  return (
    <div className="flex flex-col items-center mb-4 mt-5">
      <div className="">
        <h1 className="font-bold text-3xl text-black">GARANTÍA TAREAS PLUS</h1>
        <p className="font-bold text-black mt-2">
          En Tareas Plus queremos que tu te sientas cómodo mientras realizamos tu trabajo, taller o parcial.
          <br />
          Por eso contamos con la garantía y acompañamiento
        </p>
      </div>

      <div className="flex justify-center mt-12">
        {subscriptionPlans.map((plan, index) => (
          <div
            key={index}
            className="w-[480px] h-[360px] rounded-lg shadow-xl p-4 mx-8 cursor-pointer bg-gray-50 hover:shadow-md"
          >
            {plan.icon}
            <h2 className="text-lg font-bold mb-4 ml-0 text-left text-black mt-3">
              {plan.title}
            </h2>
            <ul className="text-black text-start ">
              {plan.features.map((feature, index) => (
                <li key={index} className="mt-4 text-justify">
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

export default Warranty;

