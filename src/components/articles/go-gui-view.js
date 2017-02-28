/**
 * This React element renders hard-coded html content about the Go GUI article.
 */

import React from 'react'

import { Well, Image, Row, Col, Panel } from 'react-bootstrap'

import goGuiScreenShot from '../../assets/go-gui-screenshot.png'
import goSvr from '../../assets/go-svr.png'
import compileToStatic from '../../assets/compile-to-static.png'
import { ScrollToTop } from '../scroll-to-top'


const GoGuiView = (props) => {
    return (
        <div>
            <ScrollToTop />
            <Well>
                <p className="lead">
                    <em>Go</em> doesn't have a native GUI to make standalone apps.
                    But we now have brilliant
                    GUI tools in HTML5, CSS, and Javascript libraries. You can
                    make a simple web server in Go in about 5 lines of code, so
                    this article shows you how to package the entire shooting
                    match into a single compiled executable that can be deployed
                    to your local machine.
                    </p>
                <p>
                    There's a brief explanation below.
                </p>
                <p>
                    Or see the the full <a
                        href='http://peterhoward42.wim42.webfactional.com/media/go-std-alone-gui.pdf'
                        target="_blank">&nbsp;PDF article
                        </a> here.
                </p>
                <p>
                    You can see the example
                    code on <a
                        href='https://github.com/peterhoward42/godesktopgui'
                        target="_blank">&nbsp;Github
                        </a>
                </p>
            </Well>
            <Panel>
                <Row>
                    <Col sm={4}>
                        <p>
                            This is the GUI the project creates - a very rough copy
                        of the <em>Github</em> GUI, and we use
                        the <em>Bootstrap</em> CSS library for the styling and
                        the widgets.
                    </p>
                        <p>
                            The HTML is rendered by the <em>Go</em> code using its
                        native HTML templating package.
                    </p>
                    </Col>
                    <Col sm={8}>
                        <Image src={goGuiScreenShot} responsive />
                    </Col>
                </Row>
            </Panel>
            <Panel>
                <Row>
                    <Col sm={4}>
                        <p>
                            You need only a tiny fragment of code to make a
                         web server in Go, as you can see.
                    </p>
                    </Col>
                    <Col sm={8}>
                        <Image src={goSvr} responsive />
                    </Col>
                </Row>
            </Panel>
            <Panel>
                <Row>
                    <Col sm={4}>
                        <p>
                            We bake the resources into the executable by
                            converting them into compilable source code.
                    </p>
                    </Col>
                    <Col sm={8}>
                        <Image src={compileToStatic} responsive />
                    </Col>
                </Row>
            </Panel>
            <Panel>
                <p>
                    And all we have to do to use it, is to run
                    the <mark>godesktopgui.exe</mark> executable, which is
                    the completely self-sufficient server - and to visit it
                    on <em>localhost</em> with a browser.
                </p>
            </Panel>
        </div>
    )
}

// <img width={400} height={400} src={goGuiScreenShot} alt="GUI screenshot" />

export { GoGuiView }
