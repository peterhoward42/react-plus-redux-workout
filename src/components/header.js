/**
 * A simple React element to render a page Header
 */

import React from 'react'

import { Jumbotron } from 'react-bootstrap'


const Header = () => (
    <Jumbotron >
        <h3>Pete Howard</h3>
        <p>Showcase projects.</p>
    </Jumbotron >
)

export { Header }