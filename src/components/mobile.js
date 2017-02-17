import React from 'react'
import { Grid, Row, Col } from 'react-bootstrap'


import { MenuScreen } from './menu-screen'
import { ArticleScreenContainer } from '../containers/article-screen-container'

const SHOW_MENU = 'showmenu'
const SHOW_ARTICLE = 'showarticle'

const chooseWhichScreen = (viewMode) => {
    switch (viewMode) {
        case SHOW_MENU:
            return <MenuScreen />
        case SHOW_ARTICLE:
            return <ArticleScreenContainer />
        default:
            throw new Error('Unrecognized view mode: ' + viewMode)
    }
}

const Mobile = (props) => {
    return (
        <Grid>
            <Row>
                <Col sm={12}>
                    {chooseWhichScreen(props.viewMode)}
                </Col>
            </Row>
        </Grid>
    )
}

export { Mobile, SHOW_MENU, SHOW_ARTICLE }
