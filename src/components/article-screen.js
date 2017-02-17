import React from 'react'

import { Panel } from 'react-bootstrap'


import { ArticleMediaContainer } from '../containers/article-media-container'
import { BackButtonBarContainer } from '../containers/back-button-bar-container'
import { ArticleDescriptionContainer } from '../containers/article-description-container'
import { ArticleTitlePanel } from './article-title-panel'

const ArticleScreen = (props) => {
    return (
        <div>
            <Panel>
                <BackButtonBarContainer />
            </Panel>
            <Panel>
                <ArticleTitlePanel
                    title={props.title}
                    subTitle={props.subTitle} />
            </Panel>
            <Panel>
                <ArticleMediaContainer />
            </Panel>
            <Panel>
                <ArticleDescriptionContainer />
            </Panel>
        </div>
    )
}

export { ArticleScreen }
