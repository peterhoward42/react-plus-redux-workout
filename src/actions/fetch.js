import { FETCH } from './action-types'

/**
 * This action can model a fetch being initiated, a fetch succeeding, or a fetch
 * failing, depending on the value given to the status parameter.
 * See ./action-types.
 */
const fetch = (url, status, payload = '') => ({
    type: FETCH,
    status: status,
    payload: payload
})

export default fetch