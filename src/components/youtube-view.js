import React from 'react'

import YouTube from 'react-youtube'
import Measure from 'react-measure'

const YoutubeView = (props) => {
    return (
        <Measure>
            {
                ({width}) =>
                    <div>
                        <div>
                            My width is {width}
                        </div>
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
