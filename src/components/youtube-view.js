/**
 * This React element wraps a third party React YouTube player in order to
 * size the player exactly in accordance with the space available.
 * 
 * It uses a functional design pattern, whereby the element rendered is simply
 * a measuring device. This (third party) measuring component demands a callback
 * to which it will pass the meausurements once it has acquired them. We arrange
 * for this callback to render the YouTube player - but now being able to
 * provide a sizing parameter to it.
 */

import React from 'react'

import YouTube from 'react-youtube'
import Measure from 'react-measure'

const YoutubeView = (props) => {
    return (
        <Measure>
            {
                ({width}) =>
                    <div>
                        <YouTube
                            videoId={props.videoId}
                            opts={{
                                width: width,

                            }}
                        >
                        </YouTube>
                    </div>
            }
        </Measure >
    )
}
export { YoutubeView }
