import React from 'react';

import { shallow, mount, render } from 'enzyme';
import App from '../client/src/components/App.jsx';

describe('<App />', () => {
  it('renders the <App /> component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(App)).to.equal(true);
  });
});