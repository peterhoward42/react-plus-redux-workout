import React from 'react'

import {
    Panel, ListGroup, ListGroupItem
} from 'react-bootstrap'

import { BackButtonBarContainer } from '../../containers/mobile/back-button-bar-container'
import { ArticleDescription } from '../article-description'
import { ArticleTitlePanel } from '../article-title-panel'
import { ArticleMedia } from '../article-media'


const ArticleScreen = (props) => {
    const article = props.article
    return (
        <div>
            <BackButtonBarContainer />
            <ListGroup>
                <ListGroupItem bsStyle="info">
                    <ArticleTitlePanel article={article} />
                </ListGroupItem>
                <ListGroupItem>
                    <Panel>
                        <ArticleMedia article={article} />
                    </Panel>
                </ListGroupItem>
                <ListGroupItem >
                    <ArticleDescription article={article} />
                </ListGroupItem>
            </ListGroup>
        </div >
    )
}

export { ArticleScreen }
