import React from 'react'

import {
    YOUTUBE_VIEW_T,
    MARKDOWN_VIEW_T
} from '../articles-metadata'

import YouTubeView from '../components/you-tube-view'
import MarkdownView from '../components/markdown-view'

const MainPanel = (props) => {
    switch (props.viewType) {
        case YOUTUBE_VIEW_T:
            return <YoutubeContainer />
        case MARKDOWN_VIEW_T:
            return <MarkdownContainer />
        default:
            throw new Error('Unrecognized view type')
    }
}

export default MainPanel
