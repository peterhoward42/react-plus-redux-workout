import React from 'react'

import MenuScreen from './menu-screen'
import ArticleScreenContainer from '../../containers/mobile/article-screen-container'

const SHOW_MENU = 'showmenu'
const SHOW_ARTICLE = 'showarticle'

const MobileScreenChooser = (props) => {
    switch (props.viewMode) {
        case SHOW_MENU:
            return <MenuScreen />
        case SHOW_ARTICLE:
            return <ArticleScreenContainer />
        default:
            throw new Error(`Unrecognized view mode: ${props.viewMode}`)
    }
}

export { MobileScreenChooser }