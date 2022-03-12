import React, { useState } from 'react';

// import t from '../../language';
import Shape from './Shape';

const ShapeWrapper: React.FC = () => {
  const DEFAULT_CLASSNAME = 'shape-wrapper';
  const [position, setPosition] = useState({
    x: 0,
    y: 0,
  });
  // const onDragOver = React.useCallback((e) => {
  //   // eslint-disable-next-line no-console
  //   console.log('it dropped!' + e);
  // }, []);

  // const onDragStart = React.useCallback((e) => {
  //   // eslint-disable-next-line no-console
  //   console.log('it started dragging!' + e);
  // }, []);

  // const onDrop = React.useCallback((e) => {
  //   // eslint-disable-next-line no-console
  //   console.log('it was dropped' + e);
  // }, []);

  const handleDragMove = (e: any) => {
    // eslint-disable-next-line no-console
    console.log(position.x + e.movementX);
    setPosition({
      x: position.x + e.movementX,
      y: position.y + e.movementY,
    });
  };

  return (
    <div className={DEFAULT_CLASSNAME}>
      <Shape
        onPointerDown={function (): void {
          // eslint-disable-next-line no-console
          console.log('this si spointer down');
        }}
        onPointerUp={function (): void {
          // eslint-disable-next-line no-console
          console.log('this si spointer up');
        }}
        // I don't think I need this one
        onPointerMove={() => {
          return;
        }}
        onDragMove={handleDragMove}
        styleTransform={{
          transform: `translateX(${position.x}px) translateY(${position.y}px)`,
        }}
      />
    </div>
  );
};

export default ShapeWrapper;
