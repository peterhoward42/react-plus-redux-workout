/**
 * This is the Redux REDUCER that looks after which screen should be being
 * displayed in the mobile GUI variant.
 */

import { ARTICLE_CHOSEN, BACK_TO_MENU } from '../actions/action-types'

import { SHOW_MENU, SHOW_ARTICLE } from '../components/mobile/mobile-screen-chooser'

const makeState = (viewMode) => (
    {
        viewMode: viewMode
    }
)

const initialState = makeState(SHOW_MENU)

const mobileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ARTICLE_CHOSEN:
            return makeState(SHOW_ARTICLE)
        case BACK_TO_MENU:
            return makeState(SHOW_MENU)
        default:
            return state
    }
}

export { mobileReducer }