import React from 'react';

import axios from 'axios';

import DataTable from 'react-data-table-component';


const columns = [
  {
    name: 'Name',
    selector: 'name',
    sortable: true,
  },
  {
    name: 'DOB',
    selector: 'dob',

    sortable: true,
  },
  {
    name: 'Number',
    selector: 'number',

    sortable: true,
  },
  {
    name: 'Description',
    selector: 'description'
  },
];


export default class PatientList extends React.Component {
  state = {
    patients: []
  }

  

  componentDidMount() {
    axios.get('https://sleepy-citadel-27911.herokuapp.com/patients.json')
      .then(res => {
        const patients = res.data;
        this.setState({ patients });
      })
  }

  render() {
    return (
      <div>
      <DataTable
      title="Patients list"
      columns={columns}
      data={this.state.patients}
    />
    </div>
    )
  }
}