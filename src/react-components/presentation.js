/** This module is for presentation components. I.e. components that are concerned only with how things look, and not how they behave. Consequently they have no state, and can be in the functional style.
 */

import React from 'react'
import { ListGroup, ListGroupItem, ButtonGroup, Button } from 'react-bootstrap'

/** Shows the contents of an email. */
export function ContentsOfEmail(props) {
    return (<div>{props.contentsText}</div>)
}

/** Shows the header of an email, parameterised by an email number. */
export function HeaderOfEmail(props) {
    return (<h3>Email #{props.emailNumber}</h3>)
}

/** Shows the given rows of text in a Bootstrap ListGroup. */
export function ListOfEmails(props) {
    const listItems = props.rowsOfText.map((row) => {
        return (
            <ListGroupItem key={row}>{row}</ListGroupItem>
        )
    })
    return (<ListGroup>{listItems}</ListGroup>)
}

/** Shows the details of an email by compositing a header component and a contents component. */
export function DetailsOfEmail(props) {
    return (
        <div>
            <HeaderOfEmail emailNumber={props.header} />
            <ContentsOfEmail contentsText={props.contents} />
        </div>
    )
}

/** Shows the given rows of text as menu items using a Bootstrap ButtonGroup. */
export function ButtonGroupMenu(props) {
    const listItems = props.listOfStrings.map((string) => {
        return (
            <Button key={string}>{string}</Button>
        )
    })
    return (<ButtonGroup vertical>{listItems}</ButtonGroup>)
}