/** 
 * The primary element in this app is an element that shows an article.
 * It might be a YouTube video, an html page, a PDF viewer or whatever.
 * Each of these view types has a dedicated viewer element. E.g. YoutubeView.
 * This multiplexer element lives in the view hierarchy wherever one of these
 * dedicated views is needed and renders the required variant according to the
 * view-type requirement passed in.
 */

import React from 'react'

import { YOUTUBE_VIEW_T, BITCOIN_VIEW_T } from '../articles-metadata'
import { YoutubeView } from '../components/youtube-view'
import { BitcoinView } from '../components/bitcoin-view'

const ArticleViewTypeMultiplexer = (props) => {
    switch (props.article.viewType) {
        case YOUTUBE_VIEW_T:
            return <YoutubeView videoId={props.article.articleSource} />
        case BITCOIN_VIEW_T:
            return <BitcoinView />
        default:
            throw new Error('Unrecognized view type: ' + props.article.viewType)
    }
}

export { ArticleViewTypeMultiplexer }
