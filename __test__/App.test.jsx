import React from 'react';

import { shallow, mount, render } from 'enzyme';
import fetch from 'jest-fetch-mock';
import App from '../client/src/components/App.jsx';

describe('<App />', () => {

  it('renders a <CmtList /> component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(CmtList)).to.have.lengthOf(1);
  });

});