import React from 'react'
import { shallow, render } from 'enzyme'
import { ListGroup, ListGroupItem, ButtonGroup, Button } from 'react-bootstrap'

import * as dumbComponents from './dumb.js'


// These are written bottom up, w.r.t. the component hierarchy.

it('ContentsOfEmail renders given text in div.', () => {
    const wrapper = shallow(<dumbComponents.ContentsOfEmail contentsText={XXX_STRING} />)
    expect(wrapper.type()).toEqual('div')
    expect(wrapper.text()).toEqual(XXX_STRING)
})

it('EmailHeader renders given text as h3.', () => {
    const wrapper = shallow(<dumbComponents.HeaderOfEmail emailNumber={3} />)
    expect(wrapper.type()).toEqual('h3')
    expect(wrapper.text()).toEqual('Email #3')
})

it('ListOfEmails renders a Bootstrap ListGroup with injected content.', () => {
    const wrapper = shallow(
        <dumbComponents.ListOfEmails rowsOfText={ALPHABETICAL_ITEMS} />
    )
    expect(wrapper.type()).toEqual(ListGroup)
    expect(wrapper.children().length).toEqual(3)
    const item = wrapper.childAt(1)
    expect(item.type()).toEqual(ListGroupItem)
    expect(item.childAt(0).text()).toEqual(ITEM_B)
})

it('DetailsOfEmail composes the correct sub components, and passes the right props through.', () => {

    const wrapper = shallow(
        <dumbComponents.DetailsOfEmail details={EMAIL_DETAILS} />
    )
    expect(wrapper.children().length).toEqual(2)

    const emailHeader = wrapper.childAt(0)
    expect(emailHeader.type()).toEqual(dumbComponents.HeaderOfEmail)
    expect(emailHeader.props().emailNumber).toEqual(3)

    const contentsOfEmail = wrapper.childAt(1)
    expect(contentsOfEmail.type()).toEqual(dumbComponents.ContentsOfEmail)
    expect(contentsOfEmail.props().contentsText).toEqual(XXX_STRING)
})

it('SideBar renders a Bootstrap ButtonGroup with injected content.', () => {
    const wrapper = shallow(
        <dumbComponents.SideBar listOfStrings={ALPHABETICAL_ITEMS} />
    )
    expect(wrapper.type()).toEqual(ButtonGroup)
    expect(wrapper.children().length).toEqual(3)
    const item = wrapper.childAt(1)
    expect(item.type()).toEqual(Button)
    expect(item.childAt(0).text()).toEqual(ITEM_B)
})

it('Body conditionally renders either ListOfEmails or DetailsOfEmail with correct props pass through', () => {
    const wrapper = shallow(
        <dumbComponents.Body
            displayMode={dumbComponents.LIST_DISPLAY_MODE}
        />)
    // is a list of emails
    // has list of emails props

    // now same for details mode
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






