/**
 * This React element renders hard-coded html content about the 
 * Augmented Reality article.
 */

import React from 'react'

import { Well, Image, Row, Col, Panel } from 'react-bootstrap'

import angular from '../../assets/angular.png'
import { YouTubeAutoscale } from '../youtube-autoscale'


const AngularView = (props) => {
    return (
        <div>
            <Well>
                <p className="lead">
                    I've been following developments in front-end programming
                    right from the days of <em>Perl &amp; CGI</em>. Journeying
                    through Java applets, then <em>Adobe Flex</em> and <em>Microsoft's
                    Silverlight</em>.
                    </p>
                <p>
                    With the arrival of the era of Single Page Web Apps (SPAs), I
                    learned <em>Angular</em> by designing and implementing the experimental
                    project you can see here. It uses a NodeJS server at the
                    backend. (Nb. There's a newer article
                    on <em>React + Redux</em>)
                </p>
                <p>
                    You'll find a screenshot and demo video below.
                </p>
            </Well>
            <Panel>
                <Row>
                    <Col sm={5}>
                        <p>
                            Here's a screenshot. The App aims to give a view
                            into a technical organisation's skill sets, according
                            to a taxonomy, and to help resourcing managers
                            find the right people.
                    </p>
                    </Col>
                    <Col sm={7}>
                        <Image src={angular} responsive />
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
                        <YouTubeAutoscale videoId={'I8TFV31PSko'} />
                    </Col>
                </Row>
            </Panel>
        </div>
    )
}

export { AngularView }
