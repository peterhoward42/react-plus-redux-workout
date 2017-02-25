/**
 * This React element wraps an embedded YouTube iframe with a stylesheet
 * that causes it to scale to the space available, while maintaining its
 * aspect ratio.
 * 
 * Derived from the ResponsiveEmbeded npm package. And then modified:
 * - hard code YouTube embedded player as the iframe's url.
 * - hard code aspect ratio to YouTube's standard one.
 * - prevented passing of aspect ratio prop to iframe - which was throwing
 *   warnings in Chrome.
 */

import React from 'react'

const divStyle = {
    position: 'relative',
    height: 0,
    overflow: 'hidden',
    maxWidth: '100%'
}

const iframeStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%'
}

/*
 *  Turn `16:9` into `9 / 16` into `56.25%`
 *  Turn `4:3` into `3 / 4` into `75%`
 */
const ratioToPercent = (ratio) => {
    const [w, h] = ratio.split(':').map((num) => Number(num))
    return `${(h / w) * 100}%`
}

const YouTubeAutoscale = (props) => {
    const paddingBottom = ratioToPercent('16:9') // YouTube standard aspect
    const style = Object.assign({}, divStyle, { paddingBottom })
    const iframeProps = Object.assign({ frameBorder: 0 }, props, iframeStyle)
    const videoId = props.videoId
    const url = `https://www.youtube.com/embed/${videoId}`
    return (
        <div style={style}>
            <iframe
                style={iframeProps}
                src={url} />
        </div>
    )
}

export { YouTubeAutoscale }
