import { combineReducers } from 'redux'

import menuReducer from './menu-reducer'
import mainPanelReducer from './main-panel-reducer'

const topLevelReducer = combineReducers({
    menuReducer,
    mainPanelReducer
})

export default topLevelReducer