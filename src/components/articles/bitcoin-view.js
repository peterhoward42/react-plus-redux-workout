/**
 * This React element renders hard-coded html content about the bitcoin article.
 */

import React from 'react'

import { Well, Media } from 'react-bootstrap'

import criminal from './../../assets/criminal.jpg'
import fingerprint from './../../assets/fingerprint.jpg'
import github from './../../assets/github.png'

const BitcoinView = (props) => {
    return (
        <div>
            <Well>
                <p className="lead">
                    Bitcoin <em>(Blockchain)</em> has exceptionally clever
                    answers to the security challenges it faces - based on
                    Merkle Trees. This article explains how
                    the <em>Blockchain</em> works, and how Merkle Trees work.
                    </p>
                <p>
                    There's some simple demo
                    code as well <em>(in Go)</em>) which provides a nice
                    simple introduction to that language also.
                </p>

            </Well>
            <Media>
                <Media.Left>
                    <img width={90} height={90} src={criminal} alt="Criminal" />
                </Media.Left>
                <Media.Body>
                    <Media.Heading>Trust</Media.Heading>
                    <p>
                        First, how can we establish trust in a network that
                        (inevitably) contains criminal actors? And with nodes
                        that are not publicly registered and cannot be
                        authenticated using certificates?
                    </p>
                </Media.Body>
            </Media>
            <Media>
                <Media.Left>
                    <img width={90} height={90} src={fingerprint} alt="Fingerprint" />
                </Media.Left>
                <Media.Body>
                    <Media.Heading>Integrity</Media.Heading>
                    <p>
                        Then, how can we verify small data fragments using
                        checksum or hashing concepts, without fetching the
                        complete dataset over the network?
                    </p>
                </Media.Body>
            </Media>
            <Media>
                <Media.Left>
                    <img width={90} height={90} src={github} alt="Github" />
                </Media.Left>
                <Media.Body>
                    <Media.Heading>Merkle Trees</Media.Heading>
                    <p>
                        Merkle Trees lie at the heart of Bitcoin's solution to
                        these challenges.
                        <em>(Plus Bitorrent, Git, Cassandra, Tor...)</em>
                    </p>
                    <p>
                        Read my explanatory article and example code on
                        <a
                            href='https://github.com/peterhoward42/merkle-tree-and-bitcoin/'
                            target="_blank">&nbsp;Github
                        </a>
                    </p><p>
                        The code is written in <mark>Go</mark>, &amp; and serves as
                        a nice small and simple introduction to that language too.
                    </p>
                </Media.Body>
            </Media>
        </div>
    )
}

export { BitcoinView }
