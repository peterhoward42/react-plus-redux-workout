import React from 'react'
import { shallow, render } from 'enzyme'
import { ListGroup, ListGroupItem, ButtonGroup, Button } from 'react-bootstrap'

import * as dumb from './dumb.js'


// These are written bottom up, w.r.t. the component hierarchy.

it('ContentsOfEmail renders given text in div.', () => {
    const wrapper = shallow(<dumb.ContentsOfEmail contentsText={XXX_STRING} />)
    expect(wrapper.type()).toEqual('div')
    expect(wrapper.text()).toEqual(XXX_STRING)
})

it('EmailHeader renders given text as h3.', () => {
    const wrapper = shallow(<dumb.HeaderOfEmail emailNumber={3} />)
    expect(wrapper.type()).toEqual('h3')
    expect(wrapper.text()).toEqual('Email #3')
})

it('ListOfEmails renders a Bootstrap ListGroup with injected content.', () => {
    const wrapper = shallow(
        <dumb.ListOfEmails rowsOfText={ALPHABETICAL_ITEMS} />
    )
    expect(wrapper.type()).toEqual(ListGroup)
    expect(wrapper.children().length).toEqual(3)
    const item = wrapper.childAt(1)
    expect(item.type()).toEqual(ListGroupItem)
    expect(item.childAt(0).text()).toEqual(ITEM_B)
})

it('DetailsOfEmail composes the correct sub components, and passes the right props through.', () => {
    const wrapper = shallow(
        <dumb.DetailsOfEmail header='mock_header' contents='mock_contents' />
    )
    expect(wrapper.children().length).toEqual(2)

    const emailHeader = wrapper.childAt(0)
    expect(emailHeader.type()).toEqual(dumb.HeaderOfEmail)
    expect(emailHeader.props().emailNumber).toEqual('mock_header')

    const contentsOfEmail = wrapper.childAt(1)
    expect(contentsOfEmail.type()).toEqual(dumb.ContentsOfEmail)
    expect(contentsOfEmail.props().contentsText).toEqual('mock_contents')
})

it('SideBar renders a Bootstrap ButtonGroup with injected content.', () => {
    const wrapper = shallow(
        <dumb.SideBar listOfStrings={ALPHABETICAL_ITEMS} />
    )
    expect(wrapper.type()).toEqual(ButtonGroup)
    expect(wrapper.children().length).toEqual(3)
    const item = wrapper.childAt(1)
    expect(item.type()).toEqual(Button)
    expect(item.childAt(0).text()).toEqual(ITEM_B)
})


it('Body conditionally renders either ListOfEmails or DetailsOfEmail with correct props pass through', () => {
    const mockDetails = {header: 'mock_header', contents: 'mock_contents'}
    var wrapper = shallow(
        <dumb.Body displayMode={dumb.LIST_MODE} list='mock_list' details={mockDetails}/>)
    expect(wrapper.type()).toEqual(dumb.ListOfEmails)
    expect(wrapper.props().rowsOfText).toEqual('mock_list')

    wrapper = shallow(
        <dumb.Body displayMode={dumb.DETAILS_MODE} list='mock_list' details={mockDetails}/>)
    expect(wrapper.type()).toEqual(dumb.DetailsOfEmail)
    expect(wrapper.props().header).toEqual('mock_header')
    expect(wrapper.props().contents).toEqual('mock_contents')
})

const XXX_STRING = 'XXX'
const EMAIL_DETAILS = {
    emailNumber: 3,
    contentsText: XXX_STRING
}

const ITEM_A = 'Item A'
const ITEM_B = 'Item B'
const ITEM_C = 'Item C'

const ALPHABETICAL_ITEMS = [ITEM_A, ITEM_B, ITEM_C]






