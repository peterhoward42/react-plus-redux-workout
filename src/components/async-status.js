import React from 'react'

import { Something } from 'react-bootstrap'

import { WAITING, ERROR } from '../reducers/mainPanel'

fart got to here

const AsyncStatus = (props) => {
    switch (props.status) {
        case WAITING:
            return <Spinner /> // react-spinner
        case ERROR:
            return <h3>Problem with loading</h3>
        default:
            throw new Error('unknown status')
    }
}

export default AsyncStatus