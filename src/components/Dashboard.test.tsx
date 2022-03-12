import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import Dashboard from './Dashboard';

export default describe('Dashboard Tests', () => {
  it('Renders successfully', () => {
    // Arrange
    // Act
    const tree = shallow(<Dashboard />);

    //Assert
    expect(toJson(tree)).toMatchSnapshot();
  });
});
