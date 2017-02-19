import React from 'react'
import { Grid, Row, Col } from 'react-bootstrap'

/**
 * From a high-level point of view, the desktop screen layout for this app is
 * a menu panel on the left, and a big panel on the right that shows information
 * about the article that has been selected from the menu.
 * 
 * This React elemement creates the layout for these major components.
 * 
 * It uses the Bootstrap responsive grid system to create the layout.
 */

import { Header } from '../header'
import { MenuContainer } from '../../containers/menu-container'
import { ArticleDisplayAreaContainer }
    from '../../containers/desktop/article-display-area-container'

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
