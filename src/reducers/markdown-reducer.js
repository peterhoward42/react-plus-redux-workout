const makeState = (status, content) => (
    {
        fetchStatus: status,
        content: content
    }
)

const initialState = makeState(UNINITIALISED, '')

const markDownReducer = (state = initialState, action) => {
    if (action.type != FETCH) {
        return state
    }
    switch (action.status) {
        case STARTED:
            return makeState(STARTED, '')
        case SUCCEEDED:
            return makeState(SUCCEEDED, action.payload)
        case FAILED:
            return makeState(FAILED, '')
        default:
            throw new Error('unrecognized status: ' + status)
    }
}

export default markDownReducer
