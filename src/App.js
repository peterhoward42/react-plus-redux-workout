import React, { Component } from 'react';
import './App.css';

import * as presentation from './react-components/presentation.js'

const LIST_OF_EMAILS = [
  'from pete to ali',
  'from ali to pete',
  'from ebay to rightmove'
]

const FOLDERS = ['inbox', 'sent items', 'drafts']

class App extends Component {
  render() {
    return (
      <presentation.BootstrapWrappedApp
        folders={FOLDERS}
        listOfEmails={LIST_OF_EMAILS}>
      </presentation.BootstrapWrappedApp>
    )
  }
}

export default App;
