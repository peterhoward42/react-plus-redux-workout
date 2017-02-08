import React, { Component } from 'react';
import './App.css';

import * as presentation from './react-components/presentation.js'

const LIST_OF_EMAILS = ['foo', 'bar', 'baz']
const FOLDERS = ['inbox', 'sent items', 'drafts']

class App extends Component {
  render() {
    return (
      <div>
        <presentation.ContentsOfEmail contentsText='ipsum' />
        <presentation.HeaderOfEmail emailNumber='42' />
        <presentation.ListOfEmails rowsOfText={LIST_OF_EMAILS} />
        <presentation.DetailsOfEmail header='42' contents='ipsum' />
        <presentation.ButtonGroupMenu listOfStrings={FOLDERS} />
      </div>
    )
  }
}

export default App;
