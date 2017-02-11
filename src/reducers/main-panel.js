import CHOOSE_ARTICLE from '../actions/action-types'

const initialState = {
}

const mainPanel = (state = initialState, action) => {
    switch (action.type) {
        case CHOOSE_ARTICLE:
            console.log('Switching to this article: ' + action.articleName)
            return state
        default:
            return state
    }
}

export default mainPanel