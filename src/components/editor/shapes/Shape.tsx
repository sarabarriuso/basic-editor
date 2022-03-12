import classnames from 'classnames';
import React, { useState } from 'react';

interface IDraggableShapeProps {
  onPointerDown: (e: any) => void;
  onPointerUp: (e: any) => void;
  onPointerMove: (e: any) => void;
  onDragMove: (e: any) => void;
  //children: ReactNode;
  styleTransform: React.CSSProperties;
}

const Shape: React.FC<IDraggableShapeProps> = ({
  onPointerDown,
  onPointerUp,
  onPointerMove,
  onDragMove,
  //children,
  styleTransform,
}) => {
  const DEFAULT_CLASSNAME = 'shape';

  const [isDragging, setIsDragging] = useState(false);
  const [isSelected, setIsSelected] = useState(false);

  const classname: string = classnames(DEFAULT_CLASSNAME, {
    [`${DEFAULT_CLASSNAME}--selected`]: isSelected === true,
  });

  const handlePointerDown = (e: any) => {
    setIsDragging(true);
    setIsSelected(true);

    onPointerDown(e);
  };

  const handlePointerUp = (e: any) => {
    setIsDragging(false);
    setIsSelected(false);

    onPointerUp(e);
  };

  const handlePointerMove = (e: any) => {
    if (isDragging) onDragMove(e);

    onPointerMove(e);
  };

  return (
    <div
      className={classname}
      onPointerDown={handlePointerDown}
      onPointerUp={handlePointerUp}
      onPointerMove={handlePointerMove}
      style={styleTransform}
    >
      {/* //{children} */}
    </div>
  );
};

export default Shape;
