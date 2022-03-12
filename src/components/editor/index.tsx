import React, { useReducer } from 'react';

import EditorActions from './EditorActions';
import ShapeWrapper from './shapes/ShapeWrapper';

let nodeIndex = 0;

interface IShape {
  id: number;
}

const initialShapesState = {
  totalShapes: 0,
  shapes: [],
};

const shapesReducer = (
  prevState: { shapes: IShape[]; totalShapes: number },
  action: { type: string; payload: { id: number } },
) => {
  switch (action.type) {
    case 'ADD_SHAPE': {
      const newState = {
        shapes: [...prevState.shapes, action.payload],
        totalShapes: prevState.shapes.length + 1,
      };
      return newState;
    }

    case 'DELETE_SHAPE': {
      const newState = {
        ...prevState,
        shapes: prevState.shapes.filter(
          (shape: IShape) => shape.id !== action.payload.id,
        ),
        totalShapes: prevState.shapes.length - 1,
      };
      return newState;
    }

    default:
      return prevState;
  }
};

const Editor: React.FC = () => {
  const DEFAULT_CLASSNAME = 'editor';

  const [shapeSelectedId, setShapeSelectedId] = React.useState<number>();
  const [shapesState, dispatch] = useReducer(shapesReducer, initialShapesState);

  const createShapeCallback = () => {
    dispatch({ type: 'ADD_SHAPE', payload: { id: nodeIndex } });
    nodeIndex++;
  };

  const deleteShapeCallback = () => {
    if (shapeSelectedId !== undefined) {
      dispatch({ type: 'DELETE_SHAPE', payload: { id: shapeSelectedId } });
      setShapeSelectedId(undefined);
    }
  };

  const handleShapeClick = (index: number): void => {
    setShapeSelectedId(index);
  };

  return (
    <div className={DEFAULT_CLASSNAME}>
      <EditorActions
        createShapeCallback={createShapeCallback}
        removeShapeCallback={deleteShapeCallback}
        shapeToDelete={shapeSelectedId !== undefined}
      />
      <div className={`${DEFAULT_CLASSNAME}__playground`}>
        {shapesState.shapes.map((shape) => (
          <ShapeWrapper
            key={shape.id}
            onPointerDown={() => handleShapeClick(shape.id)}
            isSelected={shape.id === shapeSelectedId}
          />
        ))}
      </div>
    </div>
  );
};

export default Editor;
