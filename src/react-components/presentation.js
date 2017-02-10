/** This module is for presentation components. I.e. components that are concerned only with how things look, and not how they behave. Consequently they have no state, and can be in the functional style.
 */

import React from 'react'
import * as bs from 'react-bootstrap'

export function BootstrapWrappedApp(props) {
    return (
        <div className="container">
            <bs.Grid>
                <bs.Row>
                    <bs.Col xs={2}>
                        <SideBar folders={props.folders} />
                    </bs.Col>
                    <bs.Col xs={4}>
                        <MainPanel listOfEmails={props.listOfEmails} />
                    </bs.Col>
                </bs.Row>
            </bs.Grid>
        </div>
    )
}

export function SideBar(props) {
    return (
        <MenuOfEmailFolders folders={props.folders} />
    )
}

export function MainPanel(props) {
    return (
        <ListOfEmails list={props.listOfEmails} />
    )
}

export function ContentsOfEmail(props) {
    return (<div>{props.contentsText}</div>)
}

export function ListOfEmails(props) {
    const listItems = props.list.map((row) => {
        return (
            <bs.ListGroupItem key={row}>{row}</bs.ListGroupItem>
        )
    })
    return (<bs.ListGroup>{listItems}</bs.ListGroup>)
}

export function MenuOfEmailFolders(props) {
    const listItems = props.folders.map((string) => {
        return (
            <bs.Button key={string}>{string}</bs.Button>
        )
    })
    return (<bs.ButtonGroup vertical>{listItems}</bs.ButtonGroup>)
}

