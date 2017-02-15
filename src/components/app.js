import React from 'react'

import { Grid, Row, Col } from 'react-bootstrap'

import { Header } from './header'
import { Body } from './body'

const App = () => (
    <Grid fluid>
        <Row>
            <Col xs={12}>
                <Header />
                <Body />
            </Col>
        </Row>
    </Grid>
)

export { App }
