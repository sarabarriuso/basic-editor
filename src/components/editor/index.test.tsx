import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import Editor from '.';
import EditorActions from './EditorActions';
import ShapeWrapper from './shapes/ShapeWrapper';

export default describe('Editor Tests', () => {
  it('Editor renders successfully', () => {
    // Arrange
    // Act
    const tree = shallow(<Editor />);

    //Assert
    expect(toJson(tree)).toMatchSnapshot();
    expect(tree.find(ShapeWrapper).length).toBe(0);
  });

  it('Triggering createShapeCallback creates a new shape', () => {
    // Arrange
    // Act
    const tree = shallow(<Editor />);
    const editorActionsComp = tree.find(EditorActions);
    expect(editorActionsComp).toBeDefined();
    editorActionsComp.prop('createShapeCallback')();

    //Assert
    expect(toJson(tree)).toMatchSnapshot();
    expect(tree.find(ShapeWrapper).length).toBe(1);
  });

  it('Triggering deleteShapeCallback after selecting a shape deletes it', () => {
    // Arrange
    // Act
    const tree = shallow(<Editor />);
    const editorActionsComp = tree.find(EditorActions);

    expect(editorActionsComp).toBeDefined();
    editorActionsComp.prop('createShapeCallback')();
    expect(tree.find(ShapeWrapper).length).toBe(1);
    tree.find(ShapeWrapper).prop('onPointerDown')();
    tree.find(EditorActions).prop('removeShapeCallback')();

    //Assert
    expect(toJson(tree)).toMatchSnapshot();
    expect(tree.find(ShapeWrapper).length).toBe(0);
  });
});
