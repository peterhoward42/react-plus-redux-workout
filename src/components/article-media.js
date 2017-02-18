import React from 'react'

import { YOUTUBE_VIEW_T } from '../articles-metadata'
import { YoutubeContainer } from '../containers/youtube-container'

const ArticleMedia = (props) => {
    switch (props.article.viewType) {
        case YOUTUBE_VIEW_T:
            return <YoutubeContainer />
        default:
            throw new Error('Unrecognized view type: ' + props.article.viewType)
    }
}

export { ArticleMedia }
