/**
 * This is the Redux REDUCER that looks after which article has been
 * selected by the user.
 */

import { ARTICLE_CHOSEN, NEXT_PREV_ARTICLE } from '../actions/action-types'

import { articlesSequence, neighbourArticle } from '../articles-metadata'

const initialState = {
    selectedArticle: articlesSequence[0]
}

const menuReducer = (state = initialState, action) => {
    switch (action.type) {
        case ARTICLE_CHOSEN:
            return { selectedArticle: action.article }
        case NEXT_PREV_ARTICLE:
            return {
                selectedArticle: neighbourArticle(
                    state.selectedArticle, action.incrementIndexBy)
            }
        default:
            return state
    }
}

export { menuReducer }