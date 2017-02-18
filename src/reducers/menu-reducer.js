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