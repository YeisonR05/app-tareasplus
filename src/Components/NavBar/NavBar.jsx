import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import Logo from "../../Multimedia/Logo.png";
import ContactButton from "../ContactButton/ContactButton";
import {BiMenu} from 'react-icons/bi'

function NavItem({ href, text }) {
  return (
    <NavLink
      to={href}
      className="text-black text-base font-bold hover:text-gray-800"
    >
      {text}
    </NavLink>
  );
}

function NavItemMobile({ href, text }) {
  return (
    <NavLink to={href} className="text-black text-xm">
      {text}
    </NavLink>
  );
}

const NavBar = () => {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <nav className="bg-[#18E4BE] p-[0.7rem] sticky top-0 z-10">
      <div className="flex justify-between items-center max-w-[1150px] mx-auto">
        <div className="flex items-center gap-[1rem]">
          {isMobile && (
            <button
              className="text-black font-bold hover:text-gray-800"
              onClick={toggleNav}
            >
              <div className="px-4 flex justify-center">
              <BiMenu size={20} />
              </div>
              Menu
            </button>
          )}
          <NavLink to="/" className="w-[55px] h-[55px] ml-auto">
            <img
              src={Logo}
              alt="TAREASPLUS"
              className="scale-125 flex items-center justify-center"
            />
          </NavLink>
        </div>
        {isMobile ? (
          // Mobile navigation
          isNavOpen && <MobileNav />
        ) : (
          // Desktop navigation
          <DesktopNav />
        )}
        <ContactButton />
      </div>
    </nav>
  );
};

const DesktopNav = () => (
  <div className="flex gap-10">
    <NavItem href="/" text="Inicio" />
    <NavItem href="/services" text="Servicios" />
    <NavItem href="/metodology" text="Metodología" />
    <NavItem href="/priceswarranty" text="Precios y Garantía" />
    <NavItem href="/about" text="Acerca de Nosotros" />
  </div>
);

const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSubMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="text-xxs absolute left-0 top-16 w-48 sm:w-56 bg-gray-100 rounded-lg shadow-lg z-10">
      <div className="mt-1">
        <NavItemMobile href="/" text="Inicio" />
      </div>
      <div className="mt-1">
        <NavItemMobile href="/services" text="Servicios" />
      </div>
      <div className="mt-1">
        <NavItemMobile href="/metodology" text="Metodología" />
      </div>
      <div className={`mt-1 ${isOpen ? 'block' : 'hidden'}`}>
        <NavItemMobile href="/priceswarranty" text="Precios y Garantía" />
      </div>
      <div className={`mt-1 ${isOpen ? 'block' : 'hidden'}`}>
        <NavItemMobile href="/about" text="Acerca de Nosotros" />
      </div>
      <div className="mt-1">
        <button
          className="text-black text-base font-bold hover:text-gray-800"
          onClick={toggleSubMenu}
        >
          {isOpen ? 'Cerrar' : 'Ver más'}
        </button>
      </div>
    </div>
  );
};

export default NavBar;


