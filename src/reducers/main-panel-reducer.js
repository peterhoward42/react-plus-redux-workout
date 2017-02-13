import { combineReducers } from 'redux'

import menuReducer from './menu-reducer'
import markdownReducer from './mark-down-reducer'

const mainPanelReducer = combineReducers({
    markdownReducer,
})

export default mainPanelReducer