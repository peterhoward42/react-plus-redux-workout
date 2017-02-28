/**
 * This React element renders hard-coded html content about the 
 * TigerCad article.
 */

import React from 'react'

import { Well, Image, Row, Col, Panel } from 'react-bootstrap'

import cadFull from '../../assets/cad-full.png'
import { YouTubeAutoscale } from '../youtube-autoscale'
import { ScrollToTop } from '../scroll-to-top'



const TigerCadView = (props) => {
    return (
        <div>
            <ScrollToTop />
            <Well>
                <p className="lead">
                    This is a desktop 2D CAD Application written in
                    Microsoft Visual C++ (with MFC).
                    </p>
                <p>
                    You'll find a screenshot and demo video below.
                </p>
            </Well>
            <Panel>
                <Row>
                    <Col sm={12}>
                        <h4>Here's the screenshot</h4>
                    </Col>
                </Row>
            </Panel>
            <Panel>
                <Row>
                    <Col sm={12}>
                        <Image src={cadFull} responsive />
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
                        <YouTubeAutoscale videoId={'FXG9YlECx0k'} />
                    </Col>
                </Row>
            </Panel>
        </div>
    )
}

export { TigerCadView }
