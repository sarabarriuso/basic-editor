import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import Dashboard from './Dashboard';

export default describe('Dashboard Tests', () => {
  it('Renders successfully when is not loading tree data', () => {
    // Arrange
    // Act
    const tree = shallow(<Dashboard />);

    //Assert
    expect(toJson(tree)).toMatchSnapshot();
  });
});
