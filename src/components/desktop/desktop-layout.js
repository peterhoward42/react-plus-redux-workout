import React from 'react'
import { Grid, Row, Col, Panel } from 'react-bootstrap'

import { Header } from '../header'
import { MenuContainer } from '../../containers/menu-container'
import { ArticleMedia } from '../article-media'
import { ArticleDescription } from '../article-description'

const DesktopLayout = (props) => {
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
                    <ArticleDescription article={props.article} />
                    <Panel>
                        <ArticleMedia article={props.article} />
                    </Panel>
                </Col>
            </Row>
        </Grid>
    )
}

export { DesktopLayout }
