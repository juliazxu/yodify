import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { submitMessage } from '../actions/index'

// Get actions and pass them as props to to UserList
//      > now UserList has this.props.selectUser
const matchDispatchToProps = dispatch => {
  return {
    submitMessage: message => dispatch(submitMessage(message))
  };
};

class Input extends React.Component {
  constructor() {
    super();
    this.state = {
      message: ''
    };
  }

  handleChange(event) {
    this.setState({ message: event.target.value });
  }

  handleSubmit() {
    this.props.submitMessage(this.state.message);
  }

  render() {
    return (
      <div>
        <input
          type="text"
          placeholder="What do you want Yoda to say?"
          onChange={ (e) => this.handleChange(e) }
        />
        {/* disable when no input */}
        <a 
          className="button green"
          onClick={ () => this.handleSubmit() }
        >
          Yodify
        </a>
      </div>
    )
  }
}

// We don't want to return the plain UserList (component) anymore, we want to return the smart Container
//      > UserList is now aware of state and actions
export default connect(null, matchDispatchToProps)(Input);
