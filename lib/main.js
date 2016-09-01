import React from 'react'
import _ from 'underscore'
import { isEmail, isLength } from 'validator'

export default React.createClass({
  getInitialState(){
    return {
      email: {
        value: "",
        isValid: false
      },
      password: {
        value: "",
        isValid: false
      }
    }
  },
  onFormSubmitHandler(e){
    e.preventDefault();
    // sign user *if*
    if(this.isFormValid()){
      // @TODO: create ajax req to sign user up!
    }
  },
  setInputState(validInputData){
    let newState = {};
    // Using this syntax to render the variable as a string
    //   to set specific key based on what input name called this function
    newState[validInputData.name] = {
      value: validInputData.value,
      isValid: true
    };
    this.setState(newState);
  },
  onPasswordInputChangeHandler(e){
    let input = e.target;
    if(isLength(input.value, { min: 8, max: undefined })){
      this.setInputState(input);
    }else{
      console.log('this input does not match length requirements');
    }
  },
  onEmailInputChangeHandler(e){
    let input = e.target;
    // Check if email is valid
    if(isEmail(input.value) === true){
      this.setInputState(input)
    }else{
      console.log('this is not an email');
    }
  },
  isFormValid(){
    // storing var to check validity of all inputs
    //   if any inputs are false then this should be false
    let validityOfInputs = _.mapObject(this.state, (val, key)=>{ return val.isValid });

    return _.every(validityOfInputs, (bool)=>{
      return bool;
    });
  },
  render() {
    return (
      <main>
        <h1>Sign Up</h1>
        <form method="POST" action="#" onSubmit={ this.onFormSubmitHandler }>
          <input name="email"
                 type="email"
                 placeholder="email"
                 autoComplete="off"
                 onChange={ this.onEmailInputChangeHandler }
                 className={ this.state.email.isValid === true ? "input" : "input input--invalid"}/>
          <input name="password"
                 type="password"
                 placeholder="password"
                 onChange={ this.onPasswordInputChangeHandler }
                 className={ this.state.password.isValid === true ? "input" : "input input--invalid"} />
          <input name="submit"
                 type="submit"
                 className={ this.isFormValid() ? "input--submit" : "input--submit input--disabled"} />
        </form>
      </main>
    )
  }
})
