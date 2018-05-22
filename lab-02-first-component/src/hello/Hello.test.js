import React from 'react';
import { shallow } from 'enzyme';
import Hello from './Hello';
import renderer from 'react-test-renderer';

describe('Hello World', () => {
  it('Renders without exploding', () => {
    expect(shallow(<Hello />)).toHaveLength(1);
  });

  it('Should render with default text', () => {
    const component = shallow(<Hello />);

    expect(component).toIncludeText('Howdy');
    expect(component).toIncludeText('Partner');
  });

  it('Should render with our props', () => {
    const component = shallow(<Hello friend="Fred" />);

    expect(component).toIncludeText('Howdy');
    expect(component).toIncludeText('Fred');
    expect(component).not.toIncludeText('Partner');
  });
});

test('Link renders correctly', () => {
  const tree = renderer.create(<Hello friend="Bye" />).toJSON();
  expect(tree).toMatchSnapshot();
});
