/**
 * A simple React element that renders the title of an article in a heading
 * css style, plus a short description below it.
 */

import React from 'react'

const ArticleTitlePanel = (props) => {
    return (
        <div>
            <h4>{props.article.title}</h4>
            <p>{props.article.short}</p>
        </div>
    )
}

export { ArticleTitlePanel }