import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {convertYodify} from '../actions/actions';

class Input extends React.Component{
  constructor(){
    super();
    this.state = {
      message: ''
    };
  }

  handleChange(event) {
    this.setState({ message: event.target.value });
  }

  handleKeyPress(event) {
    if (event.key === 'Enter') {
      this.convert();
    }
  }

  clear() {
    console.log(this.state.message);
    this.setState({message: ''});
  }

  convert() {
    this.props.convertYodify(this.state.message);
  }

  render(){
    return (
      this.props.loading 
        ? <img src={require('./../assets/yoda-walking.gif')} alt="loading..." />
        : (
          <div className="wrapper">
            <input
              type="text"
              placeholder="What do you want Yoda to say?"
              autoFocus
              onChange={(e) => this.handleChange(e)}
              onKeyPress={(e) => this.handleKeyPress(e)}
              value={this.state.message}
            />
            {this.state.message && 
                <i 
                  className="entypo-cancel inline" 
                  id="close"
                  onClick={() => this.clear()}
                  >
                </i>
            }
            <a 
              className={this.state.message.trim() ? "button green" : "button green disabled"}
              onClick={() => this.convert()}
            >
              Yodify
            </a>
          </div>
        )
      )
  }
}

const mapStateToProps = state => {
  return{
    loading: state.message.loading
  };
}

const matchDispatchToProps = dispatch => {
  return bindActionCreators({convertYodify: convertYodify}, dispatch);
};

Input.PropTypes = {
  loading: PropTypes.boolean
};

export default connect(mapStateToProps, matchDispatchToProps)(Input);
