import * as React from 'react';
import { SVGProps } from 'react';
import { useState, useEffect } from 'react';

interface LinksProps extends SVGProps<SVGSVGElement> {
  color?: string;
}

const Links = ({ color = '#2BB673', ...props }: LinksProps) => {
  const [iconSize, setIconSize] = useState(14);

  useEffect(() => {
    const checkScreenSize = () => {
      setIconSize(window.innerWidth < 1080 ? 9 : 14);
    };

    checkScreenSize();

    window.addEventListener('resize', checkScreenSize);
    return () => {
      window.removeEventListener('resize', checkScreenSize);
    };
  }, []);

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={iconSize}
      height={iconSize}
      viewBox="0 0 14 14"
      preserveAspectRatio="xMidYMid meet"
      fill="none"
      {...props}
    >
      <path
        fill={color}
        d="M13.125 3.624a2.813 2.813 0 0 1-2.813 2.812 2.874 2.874 0 0 1-1.962-.762L5.596 7.051V7.725L8.35 9.102a2.898 2.898 0 0 1 1.963-.791 2.813 2.813 0 0 1 0 5.625A2.795 2.795 0 0 1 7.5 11.123v-.322L4.746 9.424a2.855 2.855 0 0 1-1.934.762A2.795 2.795 0 0 1 0 7.374 2.795 2.795 0 0 1 2.813 4.56c.732 0 1.435.322 1.933.791L7.5 3.975v-.351A2.795 2.795 0 0 1 10.313.81a2.813 2.813 0 0 1 2.812 2.813ZM2.783 8.31c.528 0 .938-.41.938-.937a.944.944 0 0 0-.938-.938.964.964 0 0 0-.937.938c0 .527.44.937.937.937Zm7.53-5.625a.944.944 0 0 0-.938.938c0 .527.41.937.938.937.497 0 .937-.41.937-.937a.964.964 0 0 0-.938-.938Zm0 9.375c.497 0 .937-.41.937-.938a.964.964 0 0 0-.938-.937.944.944 0 0 0-.937.938c0 .527.41.937.938.937Z"
      />
    </svg>
  );
};

export default Links;
