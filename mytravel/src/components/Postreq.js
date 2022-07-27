import React from 'react'

function Postreq() {

    state = {
        name: ''
    }

    handleChange = event=> {
        this.setState = ({name: event.target.value});

    }

    handleSubmit = event=> {
        event.preventDefault();

        const user = {
            name:this.state.name
        };

        axios.post('', {user})
        .then(res=>{
            console.log(res);
            console.log(res.data);
        
        })
    }

  return (
    <div>
        <form onSubmit={this.handleSubmit}>
            <label>
                person Name:<input type='text' name='name' onChange={this.handleChange}/>
            </label>
            <button type='submit'>Add</button>
        </form>
    </div>
  )
}

export default Postreq