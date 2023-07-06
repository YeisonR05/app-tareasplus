import React, { useState } from 'react';
import { FaWhatsapp, FaTiktok} from 'react-icons/fa';
import { AiOutlineInstagram } from 'react-icons/ai';
import { GoPersonAdd } from 'react-icons/go'


const ContactButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = () => {
    setIsOpen(false); 
  };

  return (
    <div className="relative">
      <button
        className="bg-white text-black font-bold py-2 px-4 rounded-lg flex items-center"
        onClick={toggleMenu}
      >
        <GoPersonAdd className="mr-2" size={20}/> 
        CONTÁCTANOS
      </button>
      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-gray-100 rounded-lg shadow-lg z-10 pb-3">
          <a
            href="https://www.instagram.com/tareasplus0/"
            target="_blank"
            rel="noopener noreferrer"
            className="block text-gray-800 hover:bg-gray-100 flex pb-2 mt-2"
            onClick={handleOptionClick}
          >
            <div className='px-4 flex justify-center'>
              <AiOutlineInstagram size={20} />
            </div>
            Instagram
          </a>
          <a
            href="https://wa.me/+573177619058?text=Hola"
            target="_blank"
            rel="noopener noreferrer"
            className="block text-gray-800 hover:bg-gray-100 flex pb-2 mt-2"
            onClick={handleOptionClick}
          >
            <div className='px-4 flex justify-center'>
              <FaWhatsapp size={20} />
            </div>
             WhatsApp
          </a>
          <a
            href="https://www.tiktok.com/@tareasplus0"
            target="_blank"
            rel="noopener noreferrer"
            className="block text-gray-800 hover:bg-gray-100 flex pb-2 mt-2"
            onClick={handleOptionClick}
          >
            <div className='px-4 flex justify-center'>
              <FaTiktok size={20} />
            </div>
             TikTok
          </a>
        </div>
      )}
    </div>
  );
};

export default ContactButton;


