import { combineReducers } from 'redux'

import menu from './menu'

const topLevelReducer = combineReducers({
    menu,
})

export default topLevelReducer