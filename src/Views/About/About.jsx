import React from "react";
import { FaWhatsapp, FaTiktok } from 'react-icons/fa';
import { AiOutlineInstagram } from 'react-icons/ai';

const About = () => {
  return (
    <div className="flex flex-wrap text-black">
      <div className="flex-1 p-5 md:p-10 w-full md:w-1/2 rounded-lg">
        <h3 className="flex text-black font-bold text-2xl">Acerca de Tareas Plus</h3>
        <div className="text-justify my-2 pr-5 md:pr-10">
          Somos una empresa de apoyo a la educación en colegios y pregrado universitario.
          Tenemos dos años de experiencia.

          En Tareas Plus, puedes contar con el respaldo de tutores especializados que te brindarán
          asistencia académica personalizada. Nos enfocamos en ayudarte con tus trabajos y proyectos
          universitarios, ofreciéndote un servicio confiable y garantizado
          <div className="my-5 md:my-10">
            <h3 className="flex text-black font-bold text-2xl">Misión</h3>
            <div className="text-justify my-2">
              En Tareas Plus, nuestra misión es ser una plataforma confiable que brinde apoyo académico de
              calidad a estudiantes de colegios y universidades. A través de nuestros tutores especializados
              y servicios personalizados, nos comprometemos a proporcionar asistencia confiable y garantizada
              para trabajos y proyectos universitarios. Nuestro objetivo es ser el respaldo académico que los
              estudiantes necesitan para alcanzar su máximo potencial.
            </div>
          </div>
        </div>
      </div>
      <div className="flex-1 p-5 md:p-2 rounded-lg w-full md:w-1/2">
        <div className="my-5 md:my-10 text-justify pr-5 md:pr-12">
          <h3 className="flex text-black font-bold text-2xl my-2">Visión</h3>
          Nos esforzamos por convertirnos en el líder indiscutible en el campo del apoyo académico,
          reconocidos por nuestra excelencia y compromiso con la educación. Buscamos expandir nuestra
          plataforma a nivel global, brindando servicios de calidad que se distingan por la atención
          personalizada, el contacto directo con tutores calificados y la garantía de resultados,
          siendo el socio confiable en el camino hacia el éxito educativo de nuestros estudiantes.
        </div>
        <div className="flex flex-col text-black my-5 md:my-10">
          <h3 className="flex text-black font-bold text-2xl">Redes Sociales</h3>
          <a href="https://www.instagram.com/tareasplus0/" target="_blank" rel="noopener noreferrer" className="flex my-2">
            <AiOutlineInstagram size={25} className="mr-3" />
            <button>Instagram</button>
          </a>
          <a href="https://wa.me/+573177619058?text=Hola" target="_blank" rel="noopener noreferrer" className="flex my-2">
            <FaWhatsapp size={25} className="mr-3" />
            <button>WhatsApp</button>
          </a>
          <a href="https://www.tiktok.com/@tareasplus0" target="_blank" rel="noopener noreferrer" className="flex my-2">
            <FaTiktok size={25} className="mr-3" />
            <button>TikTok</button>
          </a>
        </div>
        <div className="flex flex-col text-black my-5 md:my-10">
          <h3 className="flex text-black font-bold text-2xl">Contáctanos</h3>
          <div className="flex text-left my-2">
            Whatsapp: +57 3177619058
            <br />
            Email: infotareasplus0@gmail.com
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
