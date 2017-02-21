/**
 * From a high-level point of view, the desktop screen layout for this app is
 * a menu panel on the left, and a big panel on the right that shows information
 * about the article that has been selected from the menu.
 * 
 * This React elemement is the big panel on the right.
 */

import React from 'react'
import { Panel } from 'react-bootstrap'

import { ArticleViewTypeMultiplexer } from '../article-view-type-multiplexer'

const ArticleDisplayArea = (props) => {
    return (
        <div>
            <Panel>
                <ArticleViewTypeMultiplexer article={props.article} />
            </Panel>
        </div>
    )
}

export { ArticleDisplayArea }
