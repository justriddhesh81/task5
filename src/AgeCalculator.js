import React, { Component } from 'react';
import './AgeCalculator.css';

class AgeCalculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      birthdate: '',
      age: null,
    };
  }

  calculateAge = () => {
    const birthdate = new Date(this.state.birthdate);
    const today = new Date();
    const age = today.getFullYear() - birthdate.getFullYear() - (today < birthdate ? 1 : 0);
    this.setState({ age });
  }

  handleInputChange = (e) => {
    this.setState({ birthdate: e.target.value });
  }

  render() {
    return (
      <div className="age-calculator">
        <h1>Age Calculator</h1>
        <h4>Enter your date of birth</h4>
        <input
          type="date"
          value={this.state.birthdate}
          onChange={this.handleInputChange}
        />
        <button onClick={this.calculateAge}>Calculate</button>
        {this.state.age !== null && (
          <p>You are {this.state.age} years old.</p>
        )}
      </div>
    );
  }
}

export default AgeCalculator;
