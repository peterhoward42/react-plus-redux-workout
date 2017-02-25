/**
 * This React element renders hard-coded html content about the 
 * Network Editor article.
 */

import React from 'react'

import { Well, Image, Row, Col, Panel } from 'react-bootstrap'

import netEd3Views from '../../assets/neted-3views.png'
import { YouTubeAutoscale } from '../youtube-autoscale'


const GoGuiView = (props) => {
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
                    It's all about very rich drag and drop user experiences,
                    and right-clicking on elements in the diagram.
                </p>
                <p>
                    There are a series of 4 videos below - which look at the
                    software design considerations and survey some of the
                    code produced.
                </p>
                <p>
                    You might be interesed in the full a sister <a
                        href='http://peterhoward42.wim42.webfactional.com/media/net-ed-wp.pdf'
                        target="_blank">&nbsp;Design Document
                        </a>
                </p>
            </Well>
            <Panel>
                <Row>
                    <Col sm={4}>
                        <p>
                            This is the kind of GUI experience we are
                            talking about.
                    </p>
                    </Col>
                    <Col sm={8}>
                        <Image src={netEd3Views} responsive />
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
        </div>
    )
}

export { NetEdView }
