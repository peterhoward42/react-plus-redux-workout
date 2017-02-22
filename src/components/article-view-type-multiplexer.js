/** 
 * The primary element in this app is an element that shows an article.
 * It might be a YouTube video, an html page, a PDF viewer or whatever.
 * Each of these view types has a dedicated viewer element. E.g. YoutubeView.
 * This multiplexer element lives in the view hierarchy wherever one of these
 * dedicated views is needed and renders the required variant according to the
 * view-type requirement passed in.
 */

import React from 'react'

import { YoutubeView } from '../components/youtube-view'
import { BitcoinView } from '../components/bitcoin-view'

const ArticleViewTypeMultiplexer = (props) => {
    const viewElement = props.article.viewElement
    switch (viewElement) {
        case YoutubeView:
            //return <YoutubeView videoId={props.article.articleSource} />
            return viewElement({ videoId: props.article.articleSource })
        case BitcoinView:
            return viewElement('will it use this?')
        default:
            throw new Error('Unrecognized view element type: ' + viewElement)
    }
}

export { ArticleViewTypeMultiplexer }
