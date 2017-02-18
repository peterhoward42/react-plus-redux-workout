import React from 'react'
import { Grid, Row, Col } from 'react-bootstrap'


import { MobileScreenChooserContainer }
    from '../../containers/mobile/mobile-screen-chooser-container'

const MobileLayout = (props) => {
    return (
        <Grid>
            <Row>
                <Col sm={12}>
                    <MobileScreenChooserContainer />
                </Col>
            </Row>
        </Grid>
    )
}

export { MobileLayout }
