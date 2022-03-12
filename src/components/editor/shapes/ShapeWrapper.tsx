import React, { useState } from 'react';

// import t from '../../language';
import Shape from './Shape';

interface IShapeWrapperProps {
  onPointerDown: () => void;
  isSelected: boolean;
}

const ShapeWrapper: React.FC<IShapeWrapperProps> = ({
  onPointerDown,
  isSelected,
}) => {
  const DEFAULT_CLASSNAME = 'shape-wrapper';
  const [position, setPosition] = useState({
    x: 0,
    y: 0,
  });

  const handleDragMove = (e: React.PointerEvent<HTMLDivElement>) => {
    const newXPosition = position.x + e.movementX;
    const newYPosition = position.y + e.movementY;
    if (
      // These values are based on the playground area and shape size
      newXPosition > -470 &&
      newXPosition < 475 &&
      newYPosition > 0 &&
      newYPosition < 544
    ) {
      setPosition({
        x: newXPosition,
        y: newYPosition,
      });
    }
  };

  return (
    <div className={DEFAULT_CLASSNAME} style={{ height: 0 }}>
      <Shape
        onPointerDown={() => onPointerDown()}
        onDragMove={handleDragMove}
        styleTransform={{
          transform: `translateX(${position.x}px) translateY(${position.y}px)`,
        }}
        isSelected={isSelected}
      />
    </div>
  );
};

export default ShapeWrapper;
