import React from 'react'

export default React.createClass({
  getDefaultState(){
    return {
      email: "",
      password: ""
    }
  },
  onFormSubmitHandler(e){
    e.preventDefault();
  },
  onInputChangeHandler(e){
    let newState = {};
    // Using this syntax to render the variable as a string
    //   to set specific key based on what input name called this function
    newState[e.target.name] = e.target.value;
    this.setState(newState);
  },
  render() {
    return (
      <main>
        <h1>Sign Up</h1>
        <form method="POST" action="#" onSubmit={ this.onFormSubmitHandler }>
          <input name="email" type="email" placeholder="email" autoComplete="off" onChange={ this.onInputChangeHandler }/>
          <input name="password" type="password" placeholder="password" onChange={ this.onInputChangeHandler } />
          <input name="submit" type="submit" />
        </form>
      </main>
    )
  }
})
