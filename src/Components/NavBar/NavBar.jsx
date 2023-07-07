import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import Logo from "../../Multimedia/Logo.png";
import ContactButton from "../ContactButton/ContactButton";

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
          <NavLink to="/" className="w-[55px] h-[55px]">
            <img
              src={Logo}
              alt="TAREASPLUS"
              className="scale-125 flex items-center justify-center"
            />
          </NavLink>
        </div>
        {isMobile ? (
          // Mobile navigation
          <>
            <button
              className="text-black text-base font-bold hover:text-gray-800"
              onClick={toggleNav}
            >
              Menu
            </button>
            {isNavOpen && (
              <MobileNav />
            )}
          </>
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

const MobileNav = () => (
  <div className="text-xxs absolute mt-40 w-35 sm:w-35 bg-gray-100 rounded-lg shadow-lg z-10">
    <div >
      <NavItem href="/" text="Inicio" />
    </div>
    <div>
      <NavItem href="/services" text="Servicios" />
    </div>
    <div>
      <NavItem href="/metodology" text="Metodología" />
    </div>
    <div>
      <NavItem href="/priceswarranty" text="Precios y Garantía" />
    </div>
    <div>
      <NavItem href="/about" text="Acerca de Nosotros" />
    </div>
  </div>
);


export default NavBar;

