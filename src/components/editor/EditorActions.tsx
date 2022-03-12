import React from 'react';

// import t from '../../language';
import Button from '../common/Button';

interface IEditorActions {
  createNodeCallback: () => void;
  shapeToDelete: boolean;
}

const EditorActions: React.FC<IEditorActions> = ({
  createNodeCallback,
  shapeToDelete,
}) => {
  const DEFAULT_CLASSNAME = 'editor-actions';

  return (
    <div className={`${DEFAULT_CLASSNAME}`}>
      <Button text='Create Node' onClick={() => createNodeCallback} />
      <Button
        text='Delete Node'
        onClick={() => {
          return;
        }}
        disabled={!shapeToDelete}
      />
    </div>
  );
};

export default EditorActions;
