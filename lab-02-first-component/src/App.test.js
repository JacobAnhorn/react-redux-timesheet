import React from 'react';
import { shallow, mount } from 'enzyme';

import App from './App';

describe('App Component', () => {
  it('renders without exploding', () => {
    expect(shallow(<App />)).toHaveLength(1);
  });

  it('renders the Hello compoenent', () => {
    const component = mount(<App />);

    expect(component.find('[data-test-id="asdfasdf"]')).toHaveText('Howdy!!');
  });
});
