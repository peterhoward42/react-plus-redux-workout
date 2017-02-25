/**
 * This React element renders hard-coded html content about the 
 * Network Editor article.
 */

import React from 'react'

import { Well, Image, Row, Col, Panel } from 'react-bootstrap'

import netEdThumb from '../../assets/neted-thumb.png'
import { YouTubeAutoscale } from '../youtube-autoscale'


const NetEdView = (props) => {
    return (
        <div>
            <Well>
                <p className="lead">
                    This is about a Java graphics library to make applications
                    like the graphical editor shown below.
                    </p>
                <p>
                    It was conceived to help make an application for engineers
                    who were building simulations of the air flow cooling
                    networks in gas turbines.
                </p>
                <p>
                    There are a series of 4 videos below - which look at the
                    software design considerations and survey some of the
                    code produced.
                </p>
                <p>
                    You might be interesed in the full sister <a
                        href='http://peterhoward42.wim42.webfactional.com/media/net-ed-wp.pdf'
                        target="_blank">&nbsp;Design Document
                        </a>
                </p>
            </Well>
            <Panel>
                <Row>
                    <Col sm={4}>
                        <p>
                            It's all about drag and drop user experience in
                            apps like this.
                    </p>
                    </Col>
                    <Col sm={8}>
                        <Image src={netEdThumb} responsive />
                    </Col>
                </Row>
            </Panel>
            <Panel>
                <Row>
                    <Col sm={12}>
                        <YouTubeAutoscale videoId={'EgonsaQs50E'} />
                    </Col>
                </Row>
            </Panel>
            <Panel>
                <Row>
                    <Col sm={12}>
                        <YouTubeAutoscale videoId={'DDvUh6_TuEo'} />
                    </Col>
                </Row>
            </Panel>
            <Panel>
                <Row>
                    <Col sm={12}>
                        <YouTubeAutoscale videoId={'QkEoHQ77VGM'} />
                    </Col>
                </Row>
            </Panel>
            <Panel>
                <Row>
                    <Col sm={12}>
                        <YouTubeAutoscale videoId={'tghUyLlHddQ'} />
                    </Col>
                </Row>
            </Panel>
        </div>
    )
}

export { NetEdView }
