import React from 'react';
import { shallow } from 'enzyme'

import App from './App';
import * as presentation from './react-components/presentation.js'

it('Renders presentation components', () => {
  const wrapper = shallow(<App />)
})