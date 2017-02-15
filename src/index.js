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