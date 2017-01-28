//import React from 'react';
import {shallow} from 'enzyme';
import ContentsOfEmail from './dumb.js';

it('foo test', () => {
    const bar = shallow(<ContentsOfEmail paramName ='some email content string' />)
    expect(bar.thing).toEqual(42)
})