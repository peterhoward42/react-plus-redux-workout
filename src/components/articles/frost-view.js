/**
 * This React element renders hard-coded html content about the FROST article.
 */

import React from 'react'

import { Well, Image, Row, Col, Panel } from 'react-bootstrap'

import frostSnip from '../../assets/frost-snip.png'

const FrostView = (props) => {
    return (
        <div>
            <Well>
                <p className="lead">
                    <em>FROST</em> - a cloud replacement for the thousands of lines of code
                   that engineers write to read mixed input files.
                    </p>
                <p>
                    Some engineers devote hours to writing
                    file readers for custom file formats. In C++, C#, Python, and
                    Java. This research project aims to offer a
                    superior <strong>single</strong> cloud-solution-as-a-service alternative.
                </p>
                <p>
                    It's at the live demonstrator proof of concept stage only.
                </p>
                <p>
                    You'll see  a screen shot below, plus
                    a link to visit the site and try it out yourself.
                </p>
                <p>
                    You can read more with these links:
                </p>
                <ul>
                    <li><a
                        href='https://github.com/peterhoward42/frost/blob/master/docs/biz/briefing-for-managers.txt'
                        target="_blank">&nbsp;The Big Idea Document
                        </a>
                    </li>
                    <li><a
                        href='https://github.com/peterhoward42/frost/blob/master/docs/dev/conversion-rules.docx'
                        target="_blank">&nbsp;How Frost Deduces File Structure
                        </a>
                    </li>
                    <li><a
                        href='https://github.com/peterhoward42/frost'
                        target="_blank">&nbsp;The GitHub repo for the code and docs
                        </a>
                    </li>
                </ul>
            </Well>
            <Panel>
                <Row>
                    <Col sm={12}>
                        <p>
                            <em>FROST</em> is written in <em>Go</em> and hosted on <em>Google App
                            Engine.</em> There's no front end code
                            because <em>Go</em> renders the html server-side, and serves it
                            including references to
                            the <em>Bootstrap</em> CSS and javascript library - which
                            are used vanilla, out of the box.
                        </p>
                    </Col>
                </Row>
            </Panel>
            <Panel>
                <Row>
                    <Col sm={12}>
                        <h4>Screenshot</h4>
                        <Image src={frostSnip} responsive />
                    </Col>
                </Row>
            </Panel>
            <Panel>
                <Row>
                    <Col sm={12}>
                        <h4>Try it yourself&nbsp;
                        <a
                                href='http://frost-1001.appspot.com/playground/example/space-delim'
                                target="_blank">&nbsp;Visit FROST
                        </a>
                        </h4>
                    </Col>
                </Row>
            </Panel>
        </div>
    )
}

export { FrostView }
