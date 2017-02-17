import React from 'react'

const ArticleTitlePanel = (props) => {
    return (
        <div>
            <h4>{props.title}</h4>
            <p>{props.subTitle}</p>
        </div>
    )
}

export { ArticleTitlePanel }