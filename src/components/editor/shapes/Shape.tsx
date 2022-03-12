import classnames from 'classnames';
import React, { useState } from 'react';

interface IDraggableShapeProps {
  onPointerDown: (e: React.PointerEvent<HTMLDivElement>) => void;
  onDragMove: (e: React.PointerEvent<HTMLDivElement>) => void;
  styleTransform: React.CSSProperties;
  isSelected: boolean;
}

const Shape: React.FC<IDraggableShapeProps> = ({
  onPointerDown,
  onDragMove,
  styleTransform,
  isSelected,
}) => {
  const DEFAULT_CLASSNAME = 'shape';

  const [isDragging, setIsDragging] = useState(false);

  const classname: string = classnames(DEFAULT_CLASSNAME, {
    [`${DEFAULT_CLASSNAME}--selected`]: isSelected === true,
  });

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handlePointerDown = (e: any) => {
    setIsDragging(true);
    e.target.setPointerCapture(e.pointerId);
    onPointerDown(e);
  };

  const handlePointerUp = () => {
    setIsDragging(false);
  };

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (isDragging) onDragMove(e);
  };

  return (
    <div
      className={classname}
      onPointerDown={handlePointerDown}
      onPointerUp={handlePointerUp}
      onPointerMove={handlePointerMove}
      style={styleTransform}
    />
  );
};

export default Shape;
