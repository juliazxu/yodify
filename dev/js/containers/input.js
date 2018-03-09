import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {convertYodify} from '../actions/index';

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

  clear() {
    console.log(this.state.message);
    this.setState({message: ''});
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
              onChange={(e) => this.handleChange(e)}
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
              onClick={() => this.props.convertYodify(this.state.message)}
            >
              Yodify
            </a>
          </div>
        )
      )
  }
}

function mapStateToProps(state) {
  return{
    loading: state.message.loading
  };
}

function matchDispatchToProps(dispatch) {
  return bindActionCreators({convertYodify: convertYodify}, dispatch);
};

export default connect(mapStateToProps, matchDispatchToProps)(Input);
