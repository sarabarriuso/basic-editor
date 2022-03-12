import React from 'react';

import t from '../../language';
import Button, { ButtonVariant } from '../common/Button';

interface IEditorActionsProps {
  createShapeCallback: () => void;
  removeShapeCallback: () => void;
  shapeToDelete: boolean;
}

const EditorActions: React.FC<IEditorActionsProps> = ({
  createShapeCallback,
  removeShapeCallback,
  shapeToDelete,
}) => {
  const DEFAULT_CLASSNAME = 'editor-actions';

  return (
    <div className={`${DEFAULT_CLASSNAME}`}>
      <Button
        text={t.text('app.editor.actions.add')}
        onClick={() => {
          createShapeCallback();
        }}
      />
      <Button
        text={t.text('app.editor.actions.remove')}
        onClick={() => {
          removeShapeCallback();
        }}
        disabled={!shapeToDelete}
        variant={ButtonVariant.Secondary}
      />
    </div>
  );
};

export default EditorActions;
