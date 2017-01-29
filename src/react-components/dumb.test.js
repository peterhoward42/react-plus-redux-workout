import React from 'react'
import { shallow, render } from 'enzyme'
import { ListGroup, ListGroupItem } from 'react-bootstrap'

import * as dumb from './dumb.js'


// These are written bottom up, w.r.t. the component hierarchy.

it('ContentsOfEmail renders given text in div.', () => {
    const wrapper = shallow(<dumb.ContentsOfEmail contentsText='XXX' />)
    expect(wrapper.type()).toEqual('div')
    expect(wrapper.text()).toEqual('XXX')
})

it('EmailHeader renders given text as h3.', () => {
    const wrapper = shallow(<dumb.HeaderOfEmail emailNumber={3} />)
    expect(wrapper.type()).toEqual('h3')
    expect(wrapper.text()).toEqual('Email #3')
})

it('ListOfEmails renders a Bootstrap ListGroup with injected content.', () => {
    const wrapper = shallow(<dumb.ListOfEmails />)
    expect(wrapper.type()).toEqual(ListGroup)
    const children = wrapper.children()
    expect(children.length).toEqual(3)
    const child = wrapper.childAt(1)
    expect(child.type()).toEqual(ListGroupItem)
    const listItemText = child.children()
    expect(listItemText.text()).toEqual('Item 2')
})


