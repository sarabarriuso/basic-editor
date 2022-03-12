import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import Shape from './Shape';
// import ShapeWrapper from './shapes/ShapeWrapper';

export default describe('Shape Tests', () => {
  it('Shape renders successfully', () => {
    // Arrange
    // Act
    const tree = shallow(
      <Shape
        onPointerDown={() => {
          return;
        }}
        onDragMove={() => {
          return;
        }}
        styleTransform={{ width: 0 }}
        isSelected={false}
      />,
    );

    //Assert
    expect(toJson(tree)).toMatchSnapshot();
  });

  it('Shape will contain selected css modifier when selected', () => {
    // Arrange
    // Act
    const tree = shallow(
      <Shape
        onPointerDown={() => {
          return;
        }}
        onDragMove={() => {
          return;
        }}
        styleTransform={{ width: 0 }}
        isSelected={true}
      />,
    );

    const shapeComp = tree.find('div');
    //Assert
    expect(toJson(tree)).toMatchSnapshot();
    expect(shapeComp.hasClass('shape--selected')).toBeTruthy();
  });
});
