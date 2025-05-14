import * as React from 'react';

interface MenuIconProps {
  isOpen?: boolean;
}

const MenuIcon: React.FC<MenuIconProps> = ({ isOpen, ...props }) => {
  const iconColor = isOpen ? 'rgba(193, 76, 59, 1)' : '#343434';
  const iconStyle = {
    transform: isOpen ? 'rotate(90deg)' : 'rotate(0deg)',
    transition: 'transform 0.3s ease, fill 0.3s ease',
  };

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={17}
      fill="none"
      style={iconStyle}
      {...props}
    >
      <path
        fill={iconColor}
        d="M2.125.25h8.25a1.65 1.65 0 0 1 0 3.3h-8.25a1.65 1.65 0 0 1 0-3.3Zm11.55 13.2h8.25a1.65 1.65 0 1 1 0 3.3h-8.25a1.65 1.65 0 1 1 0-3.3Zm-11.55-6.6h19.8a1.65 1.65 0 0 1 0 3.3h-19.8a1.65 1.65 0 0 1 0-3.3Z"
      />
    </svg>
  );
};

export default MenuIcon;
