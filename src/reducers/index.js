import { combineReducers } from 'redux'

import { menuReducer } from './menu-reducer'
import { mobileReducer } from './mobile-reducer'

const topLevelReducer = combineReducers({
    menuReducer,
    mobileReducer
})

export default topLevelReducer