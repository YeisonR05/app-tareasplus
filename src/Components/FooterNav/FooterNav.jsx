import React from "react";
import { NavLink } from "react-router-dom";
import { FaWhatsapp } from 'react-icons/fa';
import { AiOutlineInstagram } from 'react-icons/ai';
import { FaTiktok } from 'react-icons/fa';
import Logo from "../../Multimedia/Logo.png";

function NavItem({ href, text }) {
  const handleClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <NavLink to={href} className="flex my-5" onClick={handleClick}>
      {text}
    </NavLink>
  );
}

const FooterNav = () => {
  return (
    <>
      <div className="flex flex-col md:flex-row bg-black text-white justify-end px-4 py-8 md:px-20">
        <div className="md:flex-1 p-4 rounded-lg shadow-md md:mr-8 lg:flex-grow">
          <h3 className="text-white font-bold text-xl mb-4 text-left text-justify">Acerca de Tareas Plus</h3>
          <div className="text-left">
            Somos una empresa con dos años de experiencia apoyando la educación en colegios y pregrado universitario.
            Nos enfocamos en brindarte un servicio confiable, confidencial y garantizado.
           
            <div className="mt-5 flex">
              <a href="https://www.instagram.com/tareasplus0/" target="_blank" rel="noopener noreferrer" className="flex my-3 mr-5">
                <AiOutlineInstagram size={25} />
              </a>
              <a href="https://wa.me/+573177619058?text=Hola" target="_blank" rel="noopener noreferrer" className="flex my-3 mr-5">
                <FaWhatsapp size={25} />
              </a>
              <a href="https://www.tiktok.com/@tareasplus0" target="_blank" rel="noopener noreferrer" className="flex my-3 mr-5">
                <FaTiktok size={25} />
              </a>
            </div>
          </div>
        </div>
        <div className="md:flex-1 p-4 rounded-lg shadow-md md:mr-8">
          <h3 className="text-white font-bold text-xl mb-4 text-left">Menú</h3>
          <div className="my-5">
            <NavItem href="/" text="Home" />
            <NavItem href="/services" text="Servicios" />
            <NavItem href="/metodology" text="Metodología" />
            <NavItem href="/priceswarranty" text="Precios y Garantía" />
            <NavItem href="/about" text="Acerca de Nosotros" />
          </div>
        </div>
        <div className="md:flex-1 p-4 rounded-lg shadow-md md:flex-none">
          <h3 className="text-white font-bold text-xl text-left">Redes Sociales</h3>
          <div className="flex flex-col text-white my-3">
            <a href="https://www.instagram.com/tareasplus0/" target="_blank" rel="noopener noreferrer" className="flex my-3">
              <button className="mr-3">Instagram</button>
              <AiOutlineInstagram size={25} />
            </a>
            <a href="https://wa.me/+573177619058?text=Hola" target="_blank" rel="noopener noreferrer" className="flex my-3">
              <button className="mr-3">WhatsApp</button>
              <FaWhatsapp size={25} />
            </a>
            <a href="https://www.tiktok.com/@tareasplus0" target="_blank" rel="noopener noreferrer" className="flex my-3">
              <button className="mr-10">TikTok</button>
              <FaTiktok size={25} />
            </a>
          </div>
        </div>
        <div className="md:flex-1 p-4 rounded-lg shadow-md md:flex-none">
          <h3 className="text-white font-bold text-xl text-left">Contáctanos</h3>
          <div className="flex flex-col text-white my-3">
            <div className="flex">Whatsapp: +57 3177619058</div>
            <div className="flex mt-1">Instagram: @tareasplus0</div>
            <div className="flex mt-1">TikTok: @tareasplus0</div>
          </div>
        </div>
      </div>
      <div className="bg-black text-white">
        <div className="flex items-center justify-center gap-[1rem] py-4">
          <NavLink to="/" className="w-[80px] h-[80px]">
            <img src={Logo} alt="TAREASPLUS" className="scale-125 flex items-center justify-center" />
          </NavLink>
        </div>
        <div className="bg-[#18E4BE] text-black p-2 text-center">
          TareasPlus © 2023 Todos los derechos reservados
        </div>
      </div>
    </>
  );
};

export default FooterNav;
