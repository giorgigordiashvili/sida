import * as React from 'react';
import { SVGProps } from 'react';
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={9} height={5} fill="none" {...props}>
    <path
      fill="#343434"
      d="M4.75 4.75a.619.619 0 0 1-.45-.176L1.177 1.45a.602.602 0 0 1 0-.879.602.602 0 0 1 .879 0L4.75 3.246 7.426.57a.602.602 0 0 1 .879 0 .602.602 0 0 1 0 .88L5.18 4.573a.606.606 0 0 1-.43.176Z"
    />
  </svg>
);
export default SvgComponent;
