import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import classNames from 'classnames';

const WhatsAppButton = ({ number }) => {
  const handleClick = () => {
    const phoneNumber = '+573177619058'; 
                                    
    window.open(`https://wa.me/${phoneNumber}?text=Hola`, '_blank');
  };

  return (
    <button
      className={classNames(
        'fixed',
        'bottom-6',
        'right-6',
        'p-4',
        'bg-green-500',
        'text-white',
        'rounded-full',
        'shadow-lg',
        'z-50',
        'focus:outline-none',
        'focus:ring-2',
        'focus:ring-green-500'
      )}
      onClick={handleClick}
    >
      <FaWhatsapp size={30} />
    </button>
  );
};

export default WhatsAppButton;
