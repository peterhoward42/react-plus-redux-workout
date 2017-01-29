import React from 'react'
import { shallow, render } from 'enzyme'
import { ListGroup, ListGroupItem } from 'react-bootstrap'

import * as dumbComponents from './dumb.js'


// These are written bottom up, w.r.t. the component hierarchy.

it('ContentsOfEmail renders given text in div.', () => {
    const wrapper = shallow(<dumbComponents.ContentsOfEmail contentsText='XXX' />)
    expect(wrapper.type()).toEqual('div')
    expect(wrapper.text()).toEqual('XXX')
})

it('EmailHeader renders given text as h3.', () => {
    const wrapper = shallow(<dumbComponents.HeaderOfEmail emailNumber={3} />)
    expect(wrapper.type()).toEqual('h3')
    expect(wrapper.text()).toEqual('Email #3')
})

it('ListOfEmails renders a Bootstrap ListGroup with injected content.', () => {
    const wrapper = shallow(
        <dumbComponents.ListOfEmails rowsOfText={['Item A', 'Item B', 'Item C']} />
    )
    expect(wrapper.type()).toEqual(ListGroup)
    expect(wrapper.children().length).toEqual(3)
    const listGroupItem = wrapper.childAt(1)
    expect(listGroupItem.type()).toEqual(ListGroupItem)
    const text = listGroupItem.childAt(0).text()
    expect(listGroupItem.childAt(0).text()).toEqual('Item B')
})

it('DetailsOfEmail composes the correct sub components, and passes the right props through.', () => {
    const details = {
        emailNumber: 3,
        contentsText: 'XXX'
    }
    const wrapper = shallow(
        <dumbComponents.DetailsOfEmail details={details} />
    )
    expect(wrapper.children().length).toEqual(2)
    const emailHeader = wrapper.childAt(0)
    expect(emailHeader.type()).toEqual(dumbComponents.HeaderOfEmail)
    console.log(emailHeader.debug())
    expect(emailHeader.emailNumber).toEqual(99)
})


