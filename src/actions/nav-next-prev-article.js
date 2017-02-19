/**
 * A Redux ACTION announcing that the user wants to navigate to the next 
 * or previous article in the sequence.
 */

import { NEXT_PREV_ARTICLE } from './action-types'

const navNextPrevArticle = (incrementIndexBy) => ({
    type: NEXT_PREV_ARTICLE,
    incrementIndexBy
})

export { navNextPrevArticle }