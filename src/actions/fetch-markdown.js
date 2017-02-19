/**
 * A family of Redux ACTIONS for fetching the contents of a markdown file from
 * a URI. The exported entry point action  fetchMd() is async, and will
 * dispatch subsequent sync actions on receipt of the payload, or on error.
 * 
 * THIS IS CURRENTLY NOT IN USE - BUT RETAINED TO SHOW HOW ASYNC ACTIONS CAN BE
 * ASSEMBLED USING PROMISES IN COLLABORATION WITH THUNK MIDDLEWARE.
 * 
 * It didn't work out for fetching .md files because their sources raised CORS
 * objections, which are cirumvented, but prevent the payload from being
 * readable. (they are opaque).
 * 
 * TODO: Upgrade from promises to ES7 await/async. 
 */

import fetch from 'isomorphic-fetch'

import {
    REQUESTED_MD,
    RECEIVED_MD_DATA,
    RECEIVED_MD_ERROR
} from './action-types'

// Private action creator - announcing that a request has been launched.
function requestedMd(uri) {
    return {
        type: REQUESTED_MD,
        uri
    }
}

// Private action creator - announcing that a response has been received.
function receivedMdPayload(uri, json) {
    return {
        type: RECEIVED_MD_DATA,
        uri,
        mdContent: json.data.dontknow,
    }
}

// Private action creator - announcing that an error has occurred.
function receivedMdError() {
    return {
        type: RECEIVED_MD_ERROR,
    }
}

/**
 * Public meta-action announcing that a markdown url is being fetched.
 */
function fetchingMd(uri) {
    // This action creator makes an async action by returning a function instead
    // of an object. Thunk middleware, ensures the function when called, 
    // receives the dispatch function as a parameter so that it can then of
    // itself dispatch chained actions.
    return function (dispatch) {
        // Announce we launched the request.
        dispatch(requestedMd(uri))

        // Return a chained promise
        return fetch(uri, { mode: 'no-cors' }).then(
            function (response) {
                if (response.status >= 400) {
                    return dispatch(receivedMdError())
                }
                return dispatch(receivedMdPayload(uri, response.json()))
            }
        )
    }
}

export default fetchingMd