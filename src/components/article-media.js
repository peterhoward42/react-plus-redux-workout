import React from 'react'

import { YOUTUBE_VIEW_T, MARKDOWN_VIEW_T } from '../articles-metadata'
import { YoutubeContainer } from '../containers/youtube-container'
import { MarkdownView } from './markdown-view'

const ArticleMedia = (props) => {
    switch (props.viewType) {
        case YOUTUBE_VIEW_T:
            return <YoutubeContainer />
        case MARKDOWN_VIEW_T:
            return <MarkdownView markdownContent={'some md here'} />
        default:
            throw new Error('Unrecognized view type: ' + props.viewType)
    }
}

export { ArticleMedia }
