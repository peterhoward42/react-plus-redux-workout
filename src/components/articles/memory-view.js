/**
 * This React element renders hard-coded html content about the memory article.
 */

import React from 'react'

import { Well, Row, Col, Panel } from 'react-bootstrap'
import AudioPlayer from 'react-responsive-audio-player'

// Without this import - the third party player doesn't have any controls.
// eslint-disable-next-line
import AudioCSS from 'react-responsive-audio-player/dist/audioplayer.css'

const playlist = (url) => ([
    {
        url,
        displayText: 'Memory'
    },
])

const MemoryView = (props) => {
    return (
        <div>
            <Well>
                <p className="lead">
                    My memory has caused me real problems. I've never found
                    the usual coping tricks to be
                    much good. Until I came across this one.
                </p>
            </Well>
            <Panel>
                <Row>
                    <Col sm={12}>
                        <p>
                            It's a kinda thinking machine you can learn to use and
                            install permanently in your head.
                        </p>
                        <p>
                            The only demand it
                            places on you is to choose and remember permanently ten
                            words. You use those ten words as operating keys for your
                            machine.
                        </p>
                        <p>
                            It seems fitting to strip the explanation of visual
                            aids - so it's delivered here as audio.
                        </p>
                        <p>
                            I hope it helps you as much as it has me.
                        </p>
                    </Col>
                </Row>
                <Row>
                    <Col sm={12}>
                        <AudioPlayer
                            playlist={playlist(props.article.articleSource)}
                            disableSeek={false}
                        />
                    </Col>
                </Row>
            </Panel>
            <Well>
                <h4 className="text-primary">
                    You'll be able to recall a list of 100 things -
                    by number.
                </h4>
            </Well>
        </div >
    )
}


export { MemoryView }
