/**
 * This element is used to render a multi-line description of an article as
 * a paragraph of text, 
 */
import React from 'react'

const ArticleDescription = (props) => {
    return (
        <p>
            {props.article.description}
        </p >)
}

export { ArticleDescription }