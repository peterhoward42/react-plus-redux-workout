import React from 'react'
import { Grid, Row, Col } from 'react-bootstrap'

import { Header } from '../header'
import { MenuContainer } from '../../containers/menu-container'
import { ArticleDisplayAreaContainer } from '../../containers/desktop/article-display-area-container'

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
                    <ArticleDisplayAreaContainer />
                </Col>
            </Row>
        </Grid>
    )
}

export { DesktopLayout }
