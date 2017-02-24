/**
 * This React element renders hard-coded html content about the bitcoin article.
 */

import React from 'react'

import { Well, Image, Row, Col, Panel } from 'react-bootstrap'

import ooGlum from '../../assets/oo-glum.png'
import alternator from '../../assets/alternator.png'
import steeringPre from '../../assets/steering-pre.png'
import steeringWiggle from '../../assets/steering-wiggle.png'



const OOMechView = (props) => {
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
                            The customary answers to this question get wildly
                            distracted by jargon and miss the simple and
                            vital points about
                            what <strong>difference</strong> it makes.
                        </p>
                    </Col>
                    <Col sm={7}>
                        <Image src={ooGlum} responsive />
                    </Col>
                </Row>
            </Panel>
            <Panel>
                <Row>
                    <Col sm={12}>
                        <p>
                            The point is that before we had OOD, we were hitting
                            serious difficulties from increased complexity and
                            scale:
                        </p>
                        <ul>
                            <li>
                                Development taking too long
                            </li>
                            <li>
                                More and more bugs
                            </li>
                            <li>
                                Harder and harder to change
                            </li>
                            <li>
                                Harder and harder to understand
                            </li>
                            <li>
                                Breaks every time you touch it
                            </li>
                            <li>
                                Parallel team working infeasible
                            </li>
                            <li>
                                Little code resusable
                            </li>
                            <li>
                                Open Source a pipe dream
                            </li>
                        </ul>
                    </Col>
                </Row>
            </Panel>
            <Panel>
                <Row>
                    <Col sm={5}>
                        <p>
                            Mechanical engineers <strong>already</strong> knew
                            better:
                        </p>
                        <ul>
                            <li>
                                Develop alternator separately from engine
                            </li>
                            <li>
                                Test it independently before integration
                            </li>
                            <li>
                                Swap out for different alternator any time
                            </li>
                            <li>
                                Engine designers don't have to know about alternator internals
                            </li>
                            <li>
                                In fact probably just buy it in
                            </li>
                        </ul>
                    </Col>
                    <Col sm={7}>
                        <Image src={alternator} responsive />
                    </Col>
                </Row>
            </Panel>
            <Panel>
                <Row>
                    <Col sm={12}>
                        <p>
                            The mechanical engineers were already doing
                            <mark>Object Oriented Design</mark> They just
                            didn't feel a need to call it something.
                        </p>
                        <p>

                            How about a definition that works for both worlds?
                        </p>
                        <Well>
                            <blockquote>
                                A way to build things by assembling and
                                connecting together small, independent pieces,
                                each with their own job to do.
                            </blockquote>
                        </Well>
                    </Col>
                </Row>
            </Panel>
            <Panel>
                <Row>
                    <Col sm={3}>
                        <p>
                            Let's look at a software example.
                        </p>
                        <p>
                            This Python code steers a boat by adjusting
                            the rudder by the amount needed to correct its
                            course. But we're adding loads of <em>noise</em> to
                            the compass reading with the call
                            to <em>uniform</em>.
                        </p>
                    </Col>
                    <Col sm={9}>
                        <Image src={steeringPre} responsive />
                    </Col>
                </Row>
            </Panel>
            <Panel>
                <Row>
                    <Col sm={3}>
                        <p>
                            This is what happens.
                        </p>
                    </Col>
                    <Col sm={9}>
                        <Image src={steeringWiggle} responsive />
                    </Col>
                </Row>
            </Panel>
        </div>
    )
}

export { OOMechView }
