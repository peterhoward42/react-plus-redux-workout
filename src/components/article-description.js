import React from 'react'
import { Panel } from 'react-bootstrap'

const ArticleDescription = (props) => {
    return (
        <Panel>
            {props.contentText}
        </Panel >)
}

export { ArticleDescription }