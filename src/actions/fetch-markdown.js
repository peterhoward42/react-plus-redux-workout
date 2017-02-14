/**
 * A family of actions for fetching the contents of a markdown file from
 * a URI. The exported entry point action  fetchMd() is async, and will
 * dispatch subsequent sync actions on receipt of the payload, or on error.
 */

import fetch from 'isomorphic-fetch'

function requestMd(uri) {
    return {
        type: REQUEST_MD,
        uri
    }
}

function receiveMdPayload(uri, json) {
    return {
        type: RECEIVE_MD,
        uri,
        mdContent: json.data.dontknow,
    }
}

function receiveMdError() {
    return {
        type: RECEIVE_MD_ERROR,
    }
}

function fetchMd(uri) {
    // This action creator makes an async action by returning a function instead
    // of an object. Thunk middleware, ensures the function when calle, 
    // receives the dispatch function as a parameter so that it can then of
    // itself dispatch chained actions.
    return function (dispatch) {
        // Announce we launched the request.
        dispatch(requestMd(uri))

        // Return a chained promise
        return fetch(uri).then(
            function (response) {
                if (response.status >= 400) {
                    return dispatch(receiveMdError())
                }
                return dispatch(receivedMdPayload(uri, response.json()))
            }
        )
    }
}

export default fetchMd