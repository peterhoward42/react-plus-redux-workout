import React from 'react'

import {
    Panel, ListGroup, ListGroupItem
} from 'react-bootstrap'


import { ArticleMediaContainer } from '../containers/article-media-container'
import { BackButtonBarContainer } from '../containers/back-button-bar-container'
import { ArticleDescriptionContainer } from '../containers/article-description-container'
import { ArticleTitlePanel } from './article-title-panel'

const ArticleScreen = (props) => {
    return (
        <div>
            <BackButtonBarContainer />
            <ListGroup>
                <ListGroupItem bsStyle="info">
                    <ArticleTitlePanel
                        title={props.title}
                        subTitle={props.subTitle} />
                </ListGroupItem>
                <ListGroupItem>
                    <Panel>
                        <ArticleMediaContainer />
                    </Panel>
                </ListGroupItem>
                <ListGroupItem >
                    <ArticleDescriptionContainer />
                </ListGroupItem>
            </ListGroup>
        </div >
    )
}

export { ArticleScreen }
