/**
 * This React element renders hard-coded html content about the 
 * Augmented Reality article.
 */

import React from 'react'

import { Well, Image, Row, Col, Panel } from 'react-bootstrap'

import arTargetAppears from '../../assets/ar-target-appears.png'
import arMapAppears from '../../assets/ar-map-appears.png'
import arPannedFurther from '../../assets/ar-panned-further.png'
import { YouTubeAutoscale } from '../youtube-autoscale'
import { ScrollToTop } from '../scroll-to-top'



const ArView = (props) => {
    return (
        <div>
            <ScrollToTop />
            <Well>
                <p className="lead">
                    This is about an Augmented Reality (AR) App, implemented using
                    the Vuforia platform on an Android phone.
                    </p>
                <p>
                    It was conceived as a demonstrator, to show first of all
                    that it feels to the user just like they're taking a video with their phone.
                    But when the phone <em>sees</em> a particular image in the
                    scene, the AR kicks in, and superimposes augmented 3D content
                    into the scene.
                </p>
                <p>
                    It goes on to show how the 3D content can include
                    realtime content fetched from a remote server - which in
                    the demo is live aircraft arrival times at Heathrow.
                </p>
                <p>
                    In addition to the screenshots and demo video below, you can find out more
                    about the  <a
                        href='https://www.vuforia.com/'
                        target="_blank">&nbsp;Vuforia
                        </a> platform here.
                </p>
            </Well>
            <Panel>
                <Row>
                    <Col sm={5}>
                        <p>
                            Here's the user looking at my untidy table with
                            their phone. <mark>Note</mark> the corner of the piece of
                            paper bottom right. This is the target for the AR.
                    </p>
                    </Col>
                    <Col sm={7}>
                        <Image src={arTargetAppears} responsive />
                    </Col>
                </Row>
            </Panel>
            <Panel>
                <Row>
                    <Col sm={5}>
                        <p>
                            The user panned round a bit so the phone could
                            see the paper, and the AR content appears.
                    </p>
                    </Col>
                    <Col sm={7}>
                        <Image src={arMapAppears} responsive />
                    </Col>
                </Row>
            </Panel>

            <Panel>
                <Row>
                    <Col sm={5}>
                        <p>
                            They panned some more, and you can see more of
                            the full height of the 3D scene above the table.
                    </p>
                    </Col>
                    <Col sm={7}>
                        <Image src={arPannedFurther} responsive />
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
                        <YouTubeAutoscale videoId={'Xbnbp5W21XA'} />
                    </Col>
                </Row>
            </Panel>
        </div>
    )
}

export { ArView }
