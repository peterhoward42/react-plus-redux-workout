import { combineReducers } from 'redux'

import menu from './menu'
import mainPanel from './mainPanel'

const topLevelReducer = combineReducers({
    menu,
    mainPanel
})

export default topLevelReducer