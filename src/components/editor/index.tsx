import React from 'react';
import EditorActions from './EditorActions';

// import t from '../../language';
import Shape from './shapes/ShapeWrapper';

const Editor: React.FC = () => {
  const DEFAULT_CLASSNAME = 'editor';

  // const onDragOver = React.useCallback((e) => {
  //   // eslint-disable-next-line no-console
  //   console.log('it dropped!' + e);
  // }, []);

  // const onDragStart = React.useCallback((e) => {
  //   // eslint-disable-next-line no-console
  //   console.log('it started dragging!' + e);
  // }, []);

  const createNodeCallback = () => {
    // eslint-disable-next-line no-console
    console.log('create mre!');
  };

  return (
    <div className={DEFAULT_CLASSNAME}>
      <EditorActions
        createNodeCallback={createNodeCallback}
        shapeToDelete={false}
      />

      <Shape />
      <Shape />
    </div>
  );
};

export default Editor;
