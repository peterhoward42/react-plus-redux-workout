import { combineReducers } from 'redux'

import { menuReducer } from './menu-reducer'

const topLevelReducer = combineReducers({
    menuReducer,
})

export default topLevelReducer