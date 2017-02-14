import { combineReducers } from 'redux'

import markdownReducer from './markdown-reducer'

const mainPanelReducer = combineReducers({
    markdownReducer,
})

export default mainPanelReducer