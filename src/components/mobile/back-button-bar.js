/**
 * When this app is being shown on a small screen it flips into mobile mode.
 * The mobile mode presents first a "screen"" which is a menu from which you
 * choose an article. When you choose an article, the display flips to a
 * completely different "screen" to show information about the chosen article.
 * The article screen also includes navigation controls to go back to the menu
 * etc.
 * 
 * This React element provides the navigation controls to let you go back
 * to the menu etc.
 */

import React from 'react'
import { Button, Glyphicon } from 'react-bootstrap'

const BackButtonBar = (props) => {
    return (
        <Button block onClick={props.onBackButtonClicked}>
            <Glyphicon glyph="arrow-left" />
            &nbsp;Back
        </Button>
    )
}

export { BackButtonBar }
