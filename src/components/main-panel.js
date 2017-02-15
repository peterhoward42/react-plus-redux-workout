import React from 'react'

import {
    YOUTUBE_VIEW_T,
    MARKDOWN_VIEW_T
} from '../articles-metadata'

import { YoutubeContainer } from '../containers/youtube-container'
import { MarkdownViewContainer } from '../containers/markdown-view-container'

const MainPanel = (props) => {
    switch (props.viewType) {
        case YOUTUBE_VIEW_T:
            return <YoutubeContainer />
        case MARKDOWN_VIEW_T:
            return <MarkdownViewContainer />
        default:
            throw new Error('Unrecognized view type')
    }
}

export { MainPanel }
