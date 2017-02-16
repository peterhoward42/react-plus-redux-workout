import React from 'react'

import { Panel } from 'react-bootstrap'


import { ArticleMediaContainer } from '../containers/article-media-container'
import { BackButtonBarContainer } from '../containers/back-button-bar-container'

const ArticleScreen = () => {
    return (
        <div>
            <Panel>
                <BackButtonBarContainer />
            </Panel>
            <Panel>
                <ArticleMediaContainer />
            </Panel>
            <h3>after</h3>
        </div>
    )
}

export { ArticleScreen }
