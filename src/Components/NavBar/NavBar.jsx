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
          <MobileNav />
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
  // You can customize the mobile navigation menu according to your needs
  <div>
    <button className="text-white">Menu</button>
    {/* Add a dropdown menu or any other mobile-specific navigation */}
  </div>
);

export default NavBar;
