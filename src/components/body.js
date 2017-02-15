import React from 'react'
import { Row, Col } from 'react-bootstrap'

import { MenuContainer } from '../containers/menu-container'
import { MainPanelContainer } from '../containers/main-panel-container'

const body = () => (
    <div>
        <Row>
            <Col xs={4}>
                <MenuContainer />
            </Col>
            <Col xs={8}>
                <MainPanelContainer />
            </Col>
        </Row>
    </div>
)

export { body }
