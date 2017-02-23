/**
 * This React element renders hard-coded html content about the bitcoin article.
 */

import React from 'react'

import { Well, Image, Row, Col, Panel } from 'react-bootstrap'

import openMouth from '../../assets/open-mouth.png'
import cardboard from '../../assets/cardboard.jpg'
import hair from '../../assets/split-end.jpg'
import gap from '../../assets/look-inside.png'
import goInside from '../../assets/go-inside.png'
import fly from '../../assets/fly-around.jpg'

const VRCadView = (props) => {
    return (
        <div>
            <Well>
                <p className="lead">
                    Imagine if designers using CAD, could conjure their designs
                   into physical products right in front of them. And then
                   shrink themselves to the size of a mouse, climb inside a
                   minituarised mini-sub, and then pilot their way around
                   inside the product by steering the sub.
                    </p>
                <p>
                    That's the vision for this research project.
                </p>
                <p>
                    There's a taster explanation below, or read more with these
                    links:
                </p>
                <ul>
                    <li><a
                        href='http://peterhoward42.wim42.webfactional.com/media/cadboard-project-vision.pdf'
                        target="_blank">&nbsp;Vision &amp; System Design
                        </a> (My paper)
                    </li>
                    <li><a
                        href='http://www.cs.unc.edu/techreports/94-031.pdf'
                        target="_blank">&nbsp;Robinett and Holloway
                        </a> (Their brilliantly prescient 1994 work on the maths of VR)
                    </li>
                    <li><a
                        href='https://github.com/peterhoward42/androidogles'
                        target="_blank">&nbsp;Android OpenGL Code
                        </a> The GitHub repo with my experimental code in.
                    </li>
                </ul>
            </Well>
            <Panel>
                <Row>
                    <Col sm={5}>
                        <p>
                            This is Google Cardboard - which aims to provide
                            almost zero-cost, zero-obstacle VR, and to
                            stimulate the development community.
                        </p>
                    </Col>
                    <Col sm={7}>
                        <Image src={openMouth} responsive />
                        <Image src={cardboard} responsive />
                    </Col>
                </Row>
            </Panel>
            <Panel>
                <Row>
                    <Col sm={5}>
                        <p>
                            We can stimulate completely new mental senses
                            and awareness if we mess with scale. This is what
                            a broken human hair looks like if you're small in
                            comparison with it.
                        </p>
                    </Col>
                    <Col sm={7}>
                        <Image src={hair} responsive />
                    </Col>
                </Row>
            </Panel>
            <Panel>
                <Row>
                    <Col sm={5}>
                        <p>
                            So instead of looking at a small space in a machine
                            from the outside...
                        </p>
                    </Col>
                    <Col sm={7}>
                        <Image src={gap} responsive />
                    </Col>
                </Row>
            </Panel>
            <Panel>
                <Row>
                    <Col sm={5}>
                        <p>
                            We can get <mark>inside</mark>
                        </p>
                    </Col>
                    <Col sm={7}>
                        <Image src={goInside} responsive />
                    </Col>
                </Row>
            </Panel>
            <Panel>
                <Row>
                    <Col sm={5}>
                        <p>
                            And fly round to investigate
                        </p>
                    </Col>
                    <Col sm={7}>
                        <Image src={fly} responsive />
                    </Col>
                </Row>
            </Panel>
        </div>
    )
}

// <img width={400} height={400} src={goGuiScreenShot} alt="GUI screenshot" />

export { VRCadView }
