import React from 'react'
import { ListGroup, ListGroupItem } from 'react-bootstrap'

// These are written bottom up, w.r.t. the component hierarchy.


/** An element that displays the text contents of an email. */
export function ContentsOfEmail(props) {
    return (<div>{props.contentsText}</div>)
}

/** An element that displays a fixed format header for an email,
 * parameterised with an email number.
 **/
export function HeaderOfEmail(props) {
    return (<h3>Email #{props.emailNumber}</h3>)
}

/** An element that displays the given rows of text, inside a
 * Bootstrap ListGroup.
 **/
export function ListOfEmails(props) {
    return (
        <ListGroup>
            <ListGroupItem>Item 1</ListGroupItem>
            <ListGroupItem>Item 2</ListGroupItem>
            <ListGroupItem>Item 3</ListGroupItem>
        </ListGroup>)
}