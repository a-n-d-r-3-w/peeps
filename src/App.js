// @flow
import React, { Component } from 'react';
import './App.css';
import Button from '@material-ui/core/Button';

type Props = {};

class App extends Component<Props> {
  render() {
    return (
      <div className="App">
        <Button variant="contained" color="primary" data-test-id="add-person">
          Add person
        </Button>
      </div>
    );
  }
}

export default App;
