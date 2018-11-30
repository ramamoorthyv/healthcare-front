import React, { Component } from 'react';
//import FileUpload from './Fileupload';
//import Patientslist from './Patientslist';
 import PatientList from './PatientList';
import FileUpload from './FileUpload';

class App extends Component {
  render() {
    return (
      <div>
        <h2> File upload </h2>
        <FileUpload />
        <PatientList />
        
      </div>
    );
  }
}

export default App;