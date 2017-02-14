import {
    REQUESTED_MD,
    RECEIVED_MD_DATA,
    RECEIVED_MD_ERROR,
    UNINITIALISED_MD
} from '../actions/action-types'

const makeState = (status, content) => (
    {
        fetchStatus: status,
        content: content
    }
)

const initialState = makeState(UNINITIALISED_MD, '')

const markDownReducer = (state = initialState, action) => {
    // Rather than make new state constants like 'waiting', we use the action
    // keywords which imply state well enough.
    switch (action.type) {
        case REQUESTED_MD:
            return makeState(REQUESTED_MD, '')
        case RECEIVED_MD_DATA:
            return makeState(RECEIVED_MD_DATA, action.payload)
        case RECEIVED_MD_ERROR:
            return makeState(RECEIVED_MD_ERROR, '')
        default:
            return state
    }
}

export default markDownReducer
