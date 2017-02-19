/**
 * This is the entry point javascript for the app.
 * 
 * It prepares the Redux store to hold the application's state and then
 * renders the entry point React component <App>.
 * 
 * Note that the store is configured with additional middleware (Thunk).
 * The Thunk middleware allows Redux actions to be defined that have an
 * asynchronous lifecycle that they can manage themselves. For example, there
 * might be an action to fetch some data from an http connection, which,
 * under the hood should be viewed as a chain of actions to initiate the
 * fetch, to receive the answer or to receive an error/timeout. Each of these
 * actions should put the View Model into a separate state (e.g. showing a
 * spinner). This is no longer used by the app, but is retained to capture and
 * document it.
 * 
 * Read more about using Thunks with React+Redux here:
 * http://redux.js.org/docs/advanced/AsyncActions.html
 */

import thunkMiddleware from 'redux-thunk'

import React from 'react'
import { render } from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'

import { App } from './components/app'
import reducer from './reducers' // picks up the default export from index.js

const store = createStore(reducer, applyMiddleware(thunkMiddleware))

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)