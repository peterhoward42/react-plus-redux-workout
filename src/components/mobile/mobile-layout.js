/**
 * When this app is being shown on a small screen it flips into mobile mode.
 * The mobile mode presents first a "screen"" which is a menu from which you
 * choose an article. When you choose an article, the display flips to a
 * completely different "screen" to show information about the chosen article.
 * The article screen also includes navigation controls to go back to the menu
 * etc.
 * 
 * This React elemement creates the mobile-version layout for these major
 * components.
 * 
 * It uses the Bootstrap Grid to create a layout canvas, and instantiates
 * inside it a component that takes responsible for rendering whichever mobile
 * screen is being called for at the time.
 */

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
