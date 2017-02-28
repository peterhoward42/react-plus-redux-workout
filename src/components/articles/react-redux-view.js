/**
 * This React element renders hard-coded html content about the React / Redux article.
 */

import React from 'react'

import { Well, Row, Col, Panel } from 'react-bootstrap'
import { ScrollToTop } from '../scroll-to-top'



const ReactReduxView = (props) => {
    return (
        <div>
            <ScrollToTop />
            <Well>
                <p className="lead">
                    The front end for the site you're viewing right now, is built
                    with <em>React</em> and <em>Redux</em>.
                    </p>
                <p>
                    I'll make a few points about the merits of these libraries
                    below, and provide links to more authoritative sources.
                </p>
            </Well>
            <Panel>
                <Row>
                    <Col sm={12}>
                        <h4>React isn't a framework, it's just a JavaScript library
                        </h4>
                        <ul>
                            <li>
                                Which lets you <em>compose</em> resuable
                                UI view components in a hierarchy.
                            </li>
                            <li>
                                Which lets you mix it with your own choices for
                                all the other JavaScript packages you likely want.
                            </li>
                            <li>
                                You write it in proper, modern JavaScript not
                                with templates.
                            </li>
                        </ul>
                        <p>
                            Here's
                            <a
                                href='https://facebook.github.io/react/blog/2013/06/05/why-react.html'
                                target="_blank">&nbsp;Facebook's Description
                            </a> (they wrote React)
                        </p>
                        <p>
                            You can get a sense of these reusable components
                            from the
                            <a
                                href='https://github.com/peterhoward42/react-plus-redux-workout/tree/master/src/components'
                                target="_blank">&nbsp;<em>components</em>
                            </a> directory of this site's source code.
                        </p>
                    </Col>
                </Row>
            </Panel>

            <Panel>
                <Row>
                    <Col sm={12}>
                        <h4>Redux can take responsibility for UI state management
                        </h4>
                        <ul>
                            <li>
                                Like which article has been selected, and if the mobile
                                user has navigated to the articles screen or the
                                menu screen.
                            </li>
                            <li>
                                State in some front ends is really complicated, so
                                being able to separate it out, and code and test
                                it separately is really valuable. It makes the
                                view components simpler too if they needn't take
                                any interest in state.
                            </li>
                            <li>
                                <em>react-redux</em> is a neat package that hooks
                                redux up with <em>React</em> view components, so that
                                the parameters that must be passed to calls to the
                                rendering functions can be extracted very easily from the
                                UI state held by Redux.
                            </li>
                        </ul>
                        <p>
                            Here's
                            <a
                                href='http://redux.js.org/'
                                target="_blank">&nbsp;The Redux website
                            </a>
                        </p>
                        <p>
                            You can see the state management bits of this site
                            (including unit tests) by looking at the <em>actions</em> and
                            the <em>reducers</em> directories in the
                            <a
                                href='https://github.com/peterhoward42/react-plus-redux-workout'
                                target="_blank">&nbsp;source code
                            </a> on GitHub.
                        </p>
                    </Col>
                </Row>
            </Panel>
        </div>
    )
}

export { ReactReduxView }

