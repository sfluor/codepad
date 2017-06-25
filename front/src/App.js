import React, { Component } from 'react';
import TextEditor from './containers/texteditor.container';

export const BACK_URL = 'http://localhost:8080';

class App extends Component {
  render() {
    return (
      <TextEditor />
    );
  }
}

export default App;
