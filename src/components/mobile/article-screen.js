/**
 * When this app is being shown on a small screen it flips into mobile mode.
 * The mobile mode presents first a "screen"" which is a menu from which you
 * choose an article. When you choose an article, the display flips to a
 * completely different "screen" to show information about the chosen article.
 * The article screen also includes navigation controls to go back to the menu
 * etc.
 * 
 * This React element is the screen that shows information about one article
 * in mobile mode.
 */

import React from 'react'

import {
    Panel, ListGroup, ListGroupItem
} from 'react-bootstrap'

import { ArticleNavBarContainer } from '../../containers/mobile/article-nav-bar-container'
import { ArticleViewTypeMultiplexer } from '../article-view-type-multiplexer'


const ArticleScreen = (props) => {
    return (
        <div>
            <ListGroup>
                <ListGroupItem >
                    <ArticleNavBarContainer />
                </ListGroupItem>
                <ListGroupItem>
                    <Panel>
                        <ArticleViewTypeMultiplexer article={props.article} />
                    </Panel>
                </ListGroupItem>
            </ListGroup>
        </div >
    )
}

export { ArticleScreen }
