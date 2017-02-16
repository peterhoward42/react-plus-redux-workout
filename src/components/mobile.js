import React from 'react'

import { MenuScreen } from './menu-screen'
import { ArticleScreen } from './content-screen'

const SHOW_MENU = 'showmenu'
const SHOW_ARTICLE = 'showarticle'

const Mobile = (props) => {
    switch (props.viewMode) {
        case SHOW_MENU:
            return <MenuScreen />
        case SHOW_ARTICLE:
            return <ArticleScreen />
        default:
            throw new Error('Unrecognized view mode: ' + props.viewMode)
    }
}

export { Mobile, SHOW_MENU, SHOW_ARTICLE }
