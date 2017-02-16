import React from 'react'

import { YOUTUBE_VIEW_T, MARKDOWN_VIEW_T } from '../articles-metadata'
import { YoutubeView } from './youtube-view'
import { MarkdownView } from './markdown-view'

const ArticleMedia = (props) => {
    switch (props.viewType) {
        case YOUTUBE_VIEW_T:
            return <YoutubeView videoId={props.videoId} />
        case MARKDOWN_VIEW_T:
            return <MarkdownView markdownContent={'some md here'} />
        default:
            throw new Error('Unrecognized view type: ' + props.viewType)
    }
}

export { ArticleMedia }
