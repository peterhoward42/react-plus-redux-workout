import React from 'react'

import ReactMarkdown from 'react-markdown'
import Spinner from 'react-spinner'

import {
    REQUESTED_MD,
    RECEIVED_MD_DATA,
    RECEIVED_MD_ERROR,
    UNINITIALISED_MD
} from '../actions/action-types'

const MarkdownView = (props) => {
    const {fetchStatus, markdownContent} = props
    switch (fetchStatus) {
        case RECEIVED_MD_DATA:
            return (<ReactMarkdown source={markdownContent} />)
        case REQUESTED_MD:
            return (<Spinner />)
        case RECEIVED_MD_ERROR:
            return (<h3>the fetch failed boo hoo</h3>)
        case UNINITIALISED_MD:
            return null
        default:
            throw new Error('Unknown fetch status: ' + fetchStatus)
    }

}
export default MarkdownView



