import React from "react";
import { NavLink } from "react-router-dom";
import { FaWhatsapp } from 'react-icons/fa';
import { AiOutlineInstagram } from 'react-icons/ai';
import { FaTiktok } from 'react-icons/fa';
import Logo from "../../Multimedia/Logo.png";

function NavItem({ href, text }) {
  return (
    <NavLink to={href} className="flex my-3">
      {text}
    </NavLink>
  );
}

const FooterNav = () => {
  return (
    <>
      <div className="container-fluid bg-black text-white">
        <div className="row justify-content-end py-4">
          <div className="col-md-4 col-lg-3 p-3 rounded-lg shadow-md">
            <h3 className="text-white font-bold text-xl">Acerca de Tareas Plus</h3>
            <div className="text-left my-4">
              Somos una empresa con dos años de experiencia apoyando la educación en colegios y pregrado universitario. 
              Nos enfocamos en brindarte un servicio confiable, confidencial y garantizado.
              <div className="d-flex mt-4">
                <a href="https://www.instagram.com/tareasplus0/" target="_blank" 
                  rel="noopener noreferrer" className="flex my-2 me-3">
                  <AiOutlineInstagram size={25} />
                </a>
                <a href="https://wa.me/+573177619058?text=Hola" target="_blank" 
                  rel="noopener noreferrer" className="flex my-2 me-3">
                  <FaWhatsapp size={25} />
                </a>
                <a href="https://www.tiktok.com/@tareasplus0" target="_blank"
                  rel="noopener noreferrer" className="flex my-2 me-3">
                  <FaTiktok size={25} />
                </a>
              </div>
              <div className="mt-2">Whatsapp: +57 3177619058</div>
              <div className="mt-1">Instagram: @tareasplus0</div>
              <div className="mt-1">TikTok: @tareasplus0</div>
            </div>
          </div>
          <div className="col-md-4 col-lg-3 p-3 rounded-lg shadow-md">
            <h3 className="text-white font-bold text-xl">Menú</h3>
            <div className="my-4">
              <NavItem href="/" text="Home" />
              <NavItem href="/services" text="Servicios" />
              <NavItem href="/metodology" text="Metodología" />
              <NavItem href="/priceswarranty" text="Precios y Garantía" />
            </div>
          </div>
          <div className="col-md-4 col-lg-3 p-3 rounded-lg shadow-md">
            <h3 className="text-white font-bold text-xl">Redes Sociales</h3>
            <div className="d-flex flex-column text-white my-4">
              <a href="https://www.instagram.com/tareasplus0/" target="_blank" 
                rel="noopener noreferrer" className="d-flex my-2">
                <button className="me-3">Instagram</button>
                <AiOutlineInstagram size={25} />
              </a>
              <a href="https://wa.me/+573177619058?text=Hola" target="_blank" 
                rel="noopener noreferrer" className="d-flex my-2">
                <button className="me-3">WhatsApp</button>
                <FaWhatsapp size={25} />
              </a>
              <a href="https://www.tiktok.com/@tareasplus0" target="_blank"
                rel="noopener noreferrer" className="d-flex my-2">
                <button className="me-3">TikTok</button>
                <FaTiktok size={25} />
              </a>
            </div>
          </div>
        </div>
        <div className="row bg-black text-white py-3">
          <div className="col-12 text-center">
            <NavLink to="/" className="w-50 mx-auto">
              <img
                src={Logo}
                alt="TAREASPLUS"
                className="img-fluid"
              />
            </NavLink>
          </div>
        </div>
        <div className="row bg-[#18E4BE] text-black py-2">
          <div className="col-12 text-center">
            TareasPlus © 2023 Todos los derechos reservados
          </div>
        </div>
      </div>
    </>
  );
};

export default FooterNav;
