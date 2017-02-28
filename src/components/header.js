/**
 * A simple React element to render a page Header
 */

import React from 'react'

import { Well, Glyphicon, } from 'react-bootstrap'


const Header = () => (
    <div>
        <Well >
            <h3>Pete Howard</h3>
            <h5>Showcase Software Projects</h5>
            <p>
                <span><Glyphicon glyph="envelope" /></span> peterhoward42@gmail.com
            </p>
            <a
                href='https://www.linkedin.com/in/pete-howard/'
                target="_blank"
            >LinkedIn</a>
        </Well >
    </div>
)

export { Header }

