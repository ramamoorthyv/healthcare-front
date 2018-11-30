import React, { Component } from 'react';
import 'FileUpload' from './FileUpload';
import 'Patientslist' from './viewPatients';

class App extends Component {
  render() {
    return (
      <div>
        <h2> File upload </h2>
        <FileUpload />
        <Patientslist />
      </div>
    );
  }
}

export default App;