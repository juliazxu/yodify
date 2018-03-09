import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { convertYodify } from '../actions/index';

class Input extends React.Component {
  constructor() {
    super();
    this.state = {
      message: ''
    };
  }

  handleChange(event) {
    console.log(this.props.loading);
    this.setState({ message: event.target.value });
  }

  render() {
    return this.props.loading 
      ? <img src={require('./../assets/yoda-walking.gif')} alt="loading..." />
      : (
        <div>
          <input
            type="text"
            placeholder="What do you want Yoda to say?"
            onChange={ (e) => this.handleChange(e) }
          />
          <a 
            className="button green"
            onClick={ () => this.props.convertYodify(this.state.message) }
          >
            Yodify
          </a>
        </div>
      )
  }
}

function mapStateToProps(state) {
  return {
    loading: state.message.loading
  };
}

function matchDispatchToProps(dispatch) {
  return bindActionCreators({convertYodify: convertYodify}, dispatch);
};

export default connect(mapStateToProps, matchDispatchToProps)(Input);
