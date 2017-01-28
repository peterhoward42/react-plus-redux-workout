import React from 'react'
import { shallow } from 'enzyme'
import * as dumb from './dumb.js'

it('foo test', () => {
    const rendered = shallow(<dumb.ContentsOfEmail contentsText='XXX' />)
    expect(rendered.type()).toEqual('div')
    expect(rendered.text()).toEqual('XXX')
})

