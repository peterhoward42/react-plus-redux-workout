/**
 * This React element renders hard-coded html content about the OOD for
 * mechanical engineers article.
 */

import React from 'react'

import { Well, Image, Row, Col, Panel } from 'react-bootstrap'

import ooGlum from '../../assets/oo-glum.png'
import alternator from '../../assets/alternator.png'
import steeringPre from '../../assets/steering-pre.png'
import steeringWiggle from '../../assets/steering-wiggle.png'
import smoothBox from '../../assets/smoother-blackbox.png'
import tennis from '../../assets/tennis.png'
import smoothedCode from '../../assets/smoothed-code.png'
import smoothedResults from '../../assets/smoothed-results.png'


const OOMechView = (props) => {
    return (
        <div>
            <Well>
                <p className="lead">
                    A fresh approach to explaining Object Oriented Design - with
                   a simple and direct comparison with assembling machines
                   from parts.
                    </p>
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
                            course. But we're adding loads of random <em>noise</em> to
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
            <Panel>
                <Row>
                    <Col sm={3}>
                        <p>
                            Let's (conceptually) bolt in
                            a <em>smoother</em> black box. (An object)
                        </p>
                    </Col>
                    <Col sm={9}>
                        <Image src={smoothBox} responsive />
                    </Col>
                </Row>
            </Panel>
            <Panel>
                <Row>
                    <Col sm={3}>
                        <p>
                            Our smoother will keep hold of the last (N) readings
                            and calculate the smoothed value by taking the
                            average of the values it's holding at any one time.
                        </p>
                    </Col>
                    <Col sm={9}>
                        <Image src={tennis} responsive />
                    </Col>
                </Row>
            </Panel>
            <Panel>
                <Row>
                    <Col sm={3}>
                        <p>
                            So the modified code would be this.
                        </p>
                    </Col>
                    <Col sm={9}>
                        <Image src={smoothedCode} responsive />
                    </Col>
                </Row>
            </Panel>
            <Panel>
                <Row>
                    <Col sm={12}>
                        <p>
                            We introduce the <em>Smoother</em> class with
                            the <em>import</em> statement. A class acts like a
                            blueprint, or specification, or data sheet.
                        </p>
                        <p>
                            Then using that blueprint, we
                            make <em>(instantiate)</em> a smoother object and
                            call it <em>compass_smoother</em>. And now we have
                            it available to us, we send each reading to it,
                            using a <em>method call</em> defined in the blueprint
                            and ask for the smoothed value similarly.
                        </p>
                        <p>
                            The code for the smoother lives in another module;
                            analogously to a parts bin, or store. Parts that can
                            picked up and used in any machine you choose.
                        </p>
                    </Col>
                </Row>
            </Panel>
            <Panel>
                <Row>
                    <Col sm={3}>
                        <p>
                            Seems to work quite well
                        </p>
                    </Col>
                    <Col sm={9}>
                        <Image src={smoothedResults} responsive />
                    </Col>
                </Row>
            </Panel>

            <Well>
                <Row>
                    <Col sm={12}>
                        <p>
                            So now we have all the benefits the mechanical
                            engineers had:
                        </p>
                        <ul>
                            <li>
                                Develop SMOOTHER separately from steering system
                            </li>
                            <li>
                                Test it independently before integration
                            </li>
                            <li>
                                Swap out for different SMOOTHER any time
                            </li>
                            <li>
                                Steering designers don't have to know about smoother internals
                            </li>
                            <li>
                                In fact probably just choose an open-source one!
                            </li>
                        </ul>
                    </Col>
                </Row>
            </Well>
        </div>
    )
}

export { OOMechView }
