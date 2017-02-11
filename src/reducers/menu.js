import { CHOOSE_ARTICLE } from '../actions/action-types'

const menuItems = [
    {
        articleName: 'Learn about Merkle Trees and Bitcoin',
        description: 'A teaching article with accompanying code.'
    },
    {
        articleName: 'The lure of patterns',
        description: 'Exploring a 6 dimensional design space with sliders.'
    }
]

const initialState = {
    selectedArticle: menuItems[1].articleName
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