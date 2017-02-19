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
import { Button, ButtonGroup, Glyphicon } from 'react-bootstrap'

const ArticleNavBar = (props) => {
    return (
        <ButtonGroup bsSize="large">
            <Button onClick={props.onMenuButtonClicked}>
                <Glyphicon glyph="menu-hamburger" />
            </Button>
            <Button onClick={props.onPrevArticleClicked}>
                <Glyphicon glyph="triangle-left" />
            </Button>
            <Button onClick={props.onNextArticleClicked}>
                <Glyphicon glyph="triangle-right" />
            </Button>
        </ButtonGroup>
    )
}

export { ArticleNavBar }
