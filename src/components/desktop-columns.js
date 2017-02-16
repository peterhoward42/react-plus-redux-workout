import React from 'react'

import { Row, Col } from 'react-bootstrap'

import { MenuContainer } from '../containers/menu-container'
import { ArticleMediaContainer } from '../containers/article-media-container'
import { ArticleNarrative } from './article-narrative'

const DesktopColumns = (props) => {
    return (
        <Row>
            <Col sm={4}>
                <MenuContainer />
            </Col>
            <Col sm={8}>
                <ArticleMediaContainer />
                <ArticleNarrative />
            </Col>
        </Row>
    )
}

export { DesktopColumns }
