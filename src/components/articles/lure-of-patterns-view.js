/**
 * This React element renders content about the "lure of patterns" article, and 
 * includes an embedded YouTube player widget.
 */

import React from 'react'
import { Well } from 'react-bootstrap'


import { YouTubeAutoscale } from '../youtube-autoscale'

const LureOfPatternsView = (props) => {
    return (
        <div>
            <Well>
                <p className="lead">
                    This is about the design of a GUI that helps you drill down
                    to just 5 simulation results, from a set of 20,000.
                </p>
                <p>
                    Each simulation will be for fixed values of parameters
                    like temperature, humidy, voltage, force or such like. And
                    you want to experimentally tighten up the tolerance bands
                    for each parameter whilst getting a feel for how much choice
                    you still have left after applying each adjustment.
                </p>
                <p>
                    The software demonstrated is coded in Python with PyQt.
                </p>
            </Well>
            <YouTubeAutoscale videoId={props.article.articleSource} />
        </div>
    )
}
export { LureOfPatternsView }
