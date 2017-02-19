/**
 * When this app is being shown on a small screen it flips into mobile mode.
 * The mobile mode presents first a "screen"" which is a menu from which you
 * choose an article. When you choose an article, the display flips to a
 * completely different "screen" to show information about the chosen article.
 * The article screen also includes navigation controls to go back to the menu
 * etc.
 * 
 * This React elememt displays exactly one of the mobile screen variants - as
 * mandated by the view mode passed in.
 */


import React from 'react'

import { MenuScreen } from './menu-screen'
import { ArticleScreenContainer } from '../../containers/mobile/article-screen-container'

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

export { MobileScreenChooser, SHOW_MENU, SHOW_ARTICLE }