/**
 * This module is for presentation components. I.e. components that are         * concerned only with how things look, and not how they behave. Consequently
 * they have no state, and should all be functional components.
 */

import React from 'react'
import * as bs from 'react-bootstrap'
import { SideBar } from '../features/side-bar/components/side-bar.js'
import { SideBarContainer } from '../features/side-bar/components/side-bar-container.js'

export function BootstrapWrappedApp(props) {
    return (
        <div className="container">
            <bs.Grid>
                <bs.Row>
                    <bs.Col xs={3}>
                        <SideBarContainer
                            folders={props.folders}
                            selectedFolder={'sent items'}
                        />
                    </bs.Col>
                    <bs.Col xs={4}>
                        <MainPanel listOfEmails={props.listOfEmails} />
                    </bs.Col>
                </bs.Row>
            </bs.Grid>
        </div>
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
        var active = (string === props.selectedFolder)
        return (
            <bs.Button key={string} active={active} >{string}</bs.Button>
        )
    })
    return (<bs.ButtonGroup vertical>{listItems}</bs.ButtonGroup>)
}