import React from 'react'

import YouTube from 'react-youtube'

const YoutubeView = (props) => {
    console.log('youtubeview props: ' + JSON.stringify(props))
    return (< YouTube videoId={props.videoId} />)
}
export { YoutubeView }
