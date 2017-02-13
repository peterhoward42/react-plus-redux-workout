import { ARTICLE_CHOSEN } from '../actions/action-types'

import { firstArticle } from '../articles-metadata'

const initialState = {
    selectedArticle: firstArticle().title
}

const menuReducer = (state = initialState, action) => {
    switch (action.type) {
        case ARTICLE_CHOSEN:
            return { selectedArticle: action.articleTitle }
        default:
            return state
    }
}

export default menuReducer