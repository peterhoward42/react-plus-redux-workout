/**
 * A family of actions for fetching the contents of a markdown file from
 * a URI. The exported entry point action  fetchMd() is async, and will
 * dispatch subsequent sync actions on receipt of the payload, or on error.
 */

import fetch from 'isomorphic-fetch'

import {
    REQUESTED_MD,
    RECEIVED_MD_DATA,
    RECEIVED_MD_ERROR
} from './action-types'

function requestedMd(uri) {
    return {
        type: REQUESTED_MD,
        uri
    }
}

function receivedMdPayload(uri, json) {
    return {
        type: RECEIVED_MD_DATA,
        uri,
        mdContent: json.data.dontknow,
    }
}

function receivedMdError() {
    return {
        type: RECEIVED_MD_ERROR,
    }
}

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