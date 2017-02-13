import React from 'react'

import ReactMarkdown from 'react-markdown'

const MarkdownView = (props) => {
    return (<ReactMarkdown source={props.markdownContent}></ReactMarkdown>)
}
export default MarkdownView



