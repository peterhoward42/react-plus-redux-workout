import { combineReducers } from 'redux'

import menuReducer from './menu-reducer'
import mainPanel from './mainPanel'

const topLevelReducer = combineReducers({
    menuReducer,
    mainPanelReducer
})

export default topLevelReducer