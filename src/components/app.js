import React from 'react'

import { Grid, Row, Col } from 'react-bootstrap'

import Header from './header'
import Body from './body'

const App = () => (
    <div className='container-fluid'>
        <Grid>
            <Row>
                <Col xs={12}>
                    <Header />
                    <Body />
                </Col>
            </Row>
        </Grid>
    </div>
)

export default App
