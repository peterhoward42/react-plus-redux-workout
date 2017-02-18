import { ARTICLE_CHOSEN } from '../actions/action-types'

import { articlesSequence } from '../articles-metadata'

const initialState = {
    selectedArticle: articlesSequence[0].title
}

const menuReducer = (state = initialState, action) => {
    switch (action.type) {
        case ARTICLE_CHOSEN:
            return { selectedArticle: action.articleTitle }
        default:
            return state
    }
}

export { menuReducer }