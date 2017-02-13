import React from 'react'

import {
    YOUTUBE_VIEW_T,
    PDF_VIEW_T,
    IFRAME_VIEW_T,
    MARKDOWN_VIEW_T
} from '../articles-metadata'

import YouTubeView from '../components/you-tube-view'
import IFrameView from '../components/iframe-view'
import MarkdownView from '../components/markdown-view'
import PdfView from '../components/pdf-view'

const MainPanel = (props) => {
    switch (props.viewType) {
        case YOUTUBE_VIEW_T:
            return <YouTubeView articleSource={props.articleSource} />
        case IFRAME_VIEW_T:
            return <IFrameView articleSource={props.articleSource} />
        case MARKDOWN_VIEW_T:
            return <MarkdownView markdownContent={props.markdownContent} />
        case PDF_VIEW_T:
            return <PdfView />
        default:
            throw new Error('Unrecognized view type')
    }
}

export default MainPanel
