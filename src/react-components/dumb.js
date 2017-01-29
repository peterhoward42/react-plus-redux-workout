import React from 'react'
import { ListGroup, ListGroupItem, ButtonGroup, Button } from 'react-bootstrap'

// These are written bottom up, w.r.t. the component hierarchy.

export const LIST_DISPLAY_MODE = 'list-display-mode'

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
    const listItems = props.rowsOfText.map((row) => {
        return (
            <ListGroupItem key={row}>{row}</ListGroupItem>
        )
    })
    return (<ListGroup>{listItems}</ListGroup>)
}

/** An element that displays the details of an email by composing
 * one HeaderOfEmai with one ContentsOfEmail
 **/
export function DetailsOfEmail(props) {
    return (    
        <div>
            <HeaderOfEmail emailNumber={props.details.emailNumber} />
            <ContentsOfEmail contentsText={props.details.contentsText}/>
        </div>
    )
}


/** An element that displays the given rows of text, as a
 * Bootstrap ButtonGroup.
 **/
export function SideBar(props) {
    const listItems = props.listOfStrings.map((string) => {
        return (
            <Button key={string}>{string}</Button>
        )
    })
    return (<ButtonGroup vertical>{listItems}</ButtonGroup>)
}

/** An element that shows either a ListOfEmails, or a DetailsOfEmails */
export function Body(props) {
    if (props.displayMode === LIST_DISPLAY_MODE) {
        return(<ListOfEmails rowsOfText={props.rowsOfText}/>)
    }
}