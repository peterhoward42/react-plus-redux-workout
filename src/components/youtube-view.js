import React from 'react'

import ReactPlayer from 'react-player'

const YoutubeView = (props) => {
    return (< ReactPlayer url={props.videoId} controls={true} />)
}
export { YoutubeView }
