import React from 'react'
import { Grid, Row, Col, Panel } from 'react-bootstrap'

import { Header } from './header'
import { MenuContainer } from '../containers/menu-container'
import { ArticleMediaContainer } from '../containers/article-media-container'
import { ArticleDescriptionContainer } from '../containers/article-description-container'

const Desktop = (props) => {
    return (
        <Grid>
            <Row>
                <Col sm={12}>
                    <Header />
                </Col>
            </Row>
            <Row>
                <Col sm={4}>
                    <MenuContainer />
                </Col>
                <Col sm={8}>
                    <ArticleDescriptionContainer />
                    <Panel>
                        <ArticleMediaContainer />
                    </Panel>
                </Col>
            </Row>
        </Grid>
    )
}

export { Desktop }
