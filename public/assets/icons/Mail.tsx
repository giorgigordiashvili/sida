import * as React from 'react';
import { SVGProps, useEffect, useState } from 'react';

const Email = (props: SVGProps<SVGSVGElement>) => {
  const [size, setSize] = useState(16);

  useEffect(() => {
    const handleResize = () => {
      // Desktop is 1080px and above, mobile is below 1080px
      if (window.innerWidth < 1080) {
        setSize(16); // 14x14 for mobile
      } else {
        setSize(14); // 16x16 for desktop
      }
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
      viewBox="0 0 19 14"
      fill="none"
      {...props}
    >
      <path
        fill="rgba(43, 182, 115, 1)"
        d="M.392 1.618C2.97 3.61 7.49 7.114 8.82 8.207c.178.147.37.222.568.222.199 0 .39-.074.568-.221 1.33-1.094 5.85-4.598 8.428-6.59a.336.336 0 0 0 .055-.493 1.61 1.61 0 0 0-1.228-.55H1.565c-.48 0-.927.2-1.228.55a.336.336 0 0 0 .055.493Z"
      />
      <path
        fill="rgba(43, 182, 115, 1)"
        d="M18.547 2.694a.42.42 0 0 0-.417.052c-2.857 2.211-6.504 5.045-7.652 5.989-.644.53-1.538.53-2.183 0C7.072 7.727 2.977 4.55.644 2.745a.421.421 0 0 0-.417-.052.357.357 0 0 0-.227.324v8.979c0 .787.702 1.428 1.565 1.428H17.21c.862 0 1.564-.64 1.564-1.429V3.018a.356.356 0 0 0-.227-.324Z"
      />
    </svg>
  );
};

export default Email;
