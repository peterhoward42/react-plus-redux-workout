/**
 * This React element renders hard-coded html content about the 
 * Augmented Reality article.
 */

import React from 'react'

import { Well, Image, Row, Col, Panel } from 'react-bootstrap'

import musicWholeApp from '../../assets/music-whole-app.png'
import { YouTubeAutoscale } from '../youtube-autoscale'
import { ScrollToTop } from '../scroll-to-top'



const PPView = (props) => {
    return (
        <div>
            <ScrollToTop />
            <Well>
                <p className="lead">
                    This is a desktop App that lets you edit piano sheet
                    music by dragging and dropping notes on the score, and
                    which can then play your composition back to you using a
                    built in piano synthesizer.
                    </p>
                <p>
                    It's written in Python and PyQt.
                </p>
                <p>
                    You'll find a screenshot and demo video below.
                </p>
            </Well>
            <Panel>
                <Row>
                    <Col sm={4}>
                        <p>
                            Here's a screenshot. You can drag and drop notes
                            from the palette top right. And you can see the
                            playback bar bottom left.
                    </p>
                    </Col>
                    <Col sm={8}>
                        <Image src={musicWholeApp} responsive />
                    </Col>
                </Row>
            </Panel>
            <Panel>
                <Row>
                    <Col sm={12}>
                        <h4>Here's the video</h4>
                    </Col>
                </Row>
            </Panel>
            <Panel>
                <Row>
                    <Col sm={12}>
                        <YouTubeAutoscale videoId={'txL3LyMKpsI'} />
                    </Col>
                </Row>
            </Panel>
        </div>
    )
}

export { PPView }
