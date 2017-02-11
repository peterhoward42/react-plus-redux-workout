import { CHOOSE_ARTICLE } from '../actions/action-types'

const initialState = {
    selectedArticle: undefined
}

const menu = (state = initialState, action) => {
    switch (action.type) {
        case CHOOSE_ARTICLE:
            return { selectedArticle: action.articleName }
        default:
            return state
    }
}

export default menu