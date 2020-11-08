import React, { Component } from 'react';
import { connect } from 'react-redux';

class Feeling extends Component {
  state = {
    feels: '',
  };

  updateFeels = (event) => {
    this.setState({
      feels: event.target.value, //updates form to input data
    });
  };

  submitFeels = (event) => {
    this.props.dispatch({ type: 'ADD_FEELS', payload: this.state.feels }); //captures input data and sends to redux store
    this.setState({
      feels: '', //clears input field by resetting state
    });
    this.props.history.push('/understanding'); //turns the page
  };

  render() {
    return (
      <div>
        <header>
          <h2>How Are you Feeling?</h2>
        </header>
        <div>
          <input
            type="number"
            placeholder="Enter a number"
            onChange={this.updateFeels}
            value={this.state.feels}
          />
          <button onClick={this.submitFeels}>Submit</button>
        </div>
      </div>
    );
  }
}

const mapStoreToProps = (store) => ({ store });

export default connect(mapStoreToProps)(Feeling);
