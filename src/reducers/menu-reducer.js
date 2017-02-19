/**
 * This is the Redux REDUCER that looks after which article has been
 * selected by the user.
 */

import { ARTICLE_CHOSEN } from '../actions/action-types'

import { articlesSequence } from '../articles-metadata'

const initialState = {
    selectedArticle: articlesSequence[0]
}

const menuReducer = (state = initialState, action) => {
    switch (action.type) {
        case ARTICLE_CHOSEN:
            return { selectedArticle: action.article }
        default:
            return state
    }
}

export { menuReducer }