import { FC } from 'react';
import { ResizableBox, ResizableBoxProps } from 'react-resizable';

import './styles.css';

interface ResizableProps {
  direction: 'horizontal' | 'vertical',
}

const Resizable: FC<ResizableProps> = ({ direction, children }) => {
  const { [direction]: resizableProps }: { [direction: string]: ResizableBoxProps } = {
    vertical: {
      height: 300,
      width: Infinity,
      resizeHandles: ['s'],
      maxConstraints: [Infinity, window.innerHeight * 0.9],
    },
    horizontal: {
      className: 'horizontal-resize',
      height: Infinity,
      width: window.innerWidth * 0.75,
      resizeHandles: ['e'],
      maxConstraints: [window.innerWidth * 0.75, Infinity],
    }
  };
 
  return (
    <ResizableBox {...resizableProps}>
      {children}
    </ResizableBox>
  );
}

export default Resizable;
