class Patientslist extends Component {

    constructor(props) {
        state = {
            isLoading: true,
            patients: [],
            error: null
          }
    }
    
    componentDidMount() {
        this.fetchPatients();
      }

      fetchPatients() {
       
        fetch('http://localhost:3000/patients/create.json')
          .then(response => response.json())
          .then(data =>
            this.setState({
              patients: data
            })
          )
          .catch(error => this.setState({ error, isLoading: false }));
      }


      render() {
        const { isLoading, patients, error } = this.state;
        return (
          <div>
            <h1>Patients List</h1>
          
            {error ? <p>{error.message}</p> : null}
            {!isLoading ? (
              patients.map(patient => {
                const { name,dob,number,description } = patient;
                return (
                  <div key={name}>
                    <p>Name: {name}</p>
                    <p>DOB: {dob}</p>
                    <p>Number: {dob}</p>
                    <p>Description: {description}</p>
                    <br />
                  </div>
                );
              })
            ) : (
              <h3>Patients data is loading....</h3>
            )}
          </div>
        );
      }
   }