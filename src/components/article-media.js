/** 
 * In both mobile and desktop presentations of the app, the most dominant panel
 * is a panel that shows the primary media for an article. For example a
 * YouTube video player, a PdfViewer or such like.
 * 
 * The code has separate viewer elements for each of these media types.
 * This React element is a wrapper for these, and renders the required variant
 * according the requirements of the selected article.
 */

import React from 'react'

import { YOUTUBE_VIEW_T } from '../articles-metadata'
import { YoutubeView } from '../components/youtube-view'

const ArticleMedia = (props) => {
    switch (props.article.viewType) {
        case YOUTUBE_VIEW_T:
            return <YoutubeView videoId={props.article.articleSource} />
        default:
            throw new Error('Unrecognized view type: ' + props.article.viewType)
    }
}

export { ArticleMedia }
