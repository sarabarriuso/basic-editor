import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import Button from './Button';

export default describe('Button Tests', () => {
  it('Renders Button successfully', () => {
    const tree = shallow(
      <Button
        className='testClass'
        onClick={(): void => {
          return;
        }}
        text='Example Text'
      />,
    );

    expect(toJson(tree)).toMatchSnapshot();
  });
});
