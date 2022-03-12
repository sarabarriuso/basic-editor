import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import Button from '../common/Button';
import EditorActions from './EditorActions';

export default describe('EditorActions Tests', () => {
  it('Editor actions renders successfully', () => {
    // Arrange
    // Act
    const tree = shallow(
      <EditorActions
        createShapeCallback={() => {
          return;
        }}
        removeShapeCallback={() => {
          return;
        }}
        shapeToDelete={false}
      />,
    );

    //Assert
    expect(toJson(tree)).toMatchSnapshot();
  });

  it('Clicking Add node button triggers createShapeCallback', () => {
    // Arrange
    let createShapedCalled = false;
    // Act
    const tree = shallow(
      <EditorActions
        createShapeCallback={() => (createShapedCalled = true)}
        removeShapeCallback={() => {
          return;
        }}
        shapeToDelete={false}
      />,
    );

    const addNodeButton = tree.find(Button).first();
    expect(addNodeButton.props().text).toBe('Add node');
    addNodeButton.simulate('click');

    //Assert
    expect(createShapedCalled).toBeTruthy();
  });

  it('Clicking Remove node button triggers removeShapeCallback', () => {
    // Arrange
    let removeShapedCalled = false;
    // Act
    const tree = shallow(
      <EditorActions
        createShapeCallback={() => {
          return;
        }}
        removeShapeCallback={() => (removeShapedCalled = true)}
        shapeToDelete={false}
      />,
    );

    const addNodeButton = tree.find(Button).last();
    expect(addNodeButton.props().text).toBe('Remove node');
    addNodeButton.simulate('click');

    //Assert
    expect(removeShapedCalled).toBeTruthy();
  });
});
