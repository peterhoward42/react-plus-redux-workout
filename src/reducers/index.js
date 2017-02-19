/**
 * This is the top-level REDUX reducer for the entire app.
 * 
 * Reducers, conceptually are the gatekeepers for changing the application's 
 * state. They are organised in a nested hierarchy as implied below - with the 
 * hierarchy corresponding to the hierachy of data in the View Model.
 * 
 * It is not necessary to separately define the View Model; because it is
 * defined implicitly by the reducer hierarchy. I.e. the ViewModel brought into
 * being by the code below is an object with two keys: "menuReducer" and
 * "mobileReducer". Each of these points to a sub reducer that takes
 * responsibility for updating that bit of the state tree.
 * 
 * For example, the menuReducer keeps track of which article is selected, while 
 * the mobileReducer keeps track of which mobile screen should be being displayed.
 * 
 * All state change mandates come in the form of REDUX actions, and each reducer 
 * gets to see all of these, and can decide which of them it should act upon.
 * 
 * Read more about reducers here:
 * http://redux.js.org/docs/introduction/CoreConcepts.html
 */

import { combineReducers } from 'redux'

import { menuReducer } from './menu-reducer'
import { mobileReducer } from './mobile-reducer'

const topLevelReducer = combineReducers({
    menuReducer,
    mobileReducer
})

export default topLevelReducer