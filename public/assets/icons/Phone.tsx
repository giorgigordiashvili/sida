import * as React from 'react';
import { SVGProps, useEffect, useState } from 'react';

const Phone = (props: SVGProps<SVGSVGElement>) => {
  const [size, setSize] = useState(16);

  useEffect(() => {
    const handleResize = () => {
      // Check if mobile (using 1080px as a common breakpoint)
      setSize(window.innerWidth < 1080 ? 16 : 14);
    };

    // Set initial size
    handleResize();

    // Add event listener for window resize
    window.addEventListener('resize', handleResize);

    // Clean up
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 16 16"
      fill="none"
      {...props}
    >
      <path
        fill="rgba(43, 182, 115, 1)"
        d="M14.72 10.504c-.98 0-1.941-.153-2.853-.455-.447-.152-.996-.012-1.269.268l-1.8 1.359c-2.086-1.115-3.372-2.4-4.47-4.472L5.645 5.45c.342-.342.465-.842.318-1.31a9.106 9.106 0 0 1-.456-2.86c0-.709-.576-1.285-1.284-1.285h-2.94C.576-.005 0 .571 0 1.28 0 9.4 6.604 16.005 14.72 16.005c.709 0 1.285-.576 1.285-1.285V11.79c0-.709-.576-1.285-1.284-1.285Z"
      />
    </svg>
  );
};

export default Phone;
