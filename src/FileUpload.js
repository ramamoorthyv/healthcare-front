import axios from 'axios';
import React from 'react';


export default class FileUpload extends React.Component {

  constructor(props) {
    super(props);
    this.state = { selectedFile: null, loaded: 0, }
  }


  handleselectedFile = event => {
    this.setState({
      selectedFile: event.target.files[0],
      loaded: 0,
    })
  }


  handleUpload = () => {
    const data = new FormData()
    data.append('file', this.state.selectedFile, this.state.selectedFile.name)

    axios
      .post('http://localhost:3000/patients/import.json', data, {
        onUploadProgress: ProgressEvent => {
          this.setState({
            loaded: (ProgressEvent.loaded / ProgressEvent.total*100),
          })
        },
      })
      .then(res => {
        console.log(res.statusText)
      })

  }
   
   render() {
     return(
       <div >
         <form onSubmit={this.handleUpload}>
         <input type="file" name="" id="" onChange={this.handleselectedFile} />
         <button onClick={this.handleUpload}>Upload</button>
        <div> </div>

         </form>
       </div>
     )
   }
 }



