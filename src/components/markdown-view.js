import React from 'react'

import ReactMarkdown from 'react-markdown'

const MarkdownView = (props) => {
    const {fetchStatus, markdownContent} = props
    switch (fetchStatus) {
        case SUCCEEDED:
            return (<ReactMarkdown source={props.markdownContent} />)
        case STARTED:
            return (<Spinner />)
        case FAILED:
            return (<h3>the fetch failed boo hoo</h3>)
    }

}
export default MarkdownView



