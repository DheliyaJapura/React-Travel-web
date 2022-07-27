import React from 'react'
import axios from 'áxios';

function Person() {
    state= {
        person: []
    }

    componentDidMount(); {
        axios.get('')
        .then(res=>{
            const persons = res.data;
            this.setState = ({persons});
        })
    }

  return (
    <div>
        <ul>
            {
                this.state.persons
                .map(person=> <li key={person.id}>{person.name}</li>)
            }
        </ul>

    </div>
  )
}

export default Person