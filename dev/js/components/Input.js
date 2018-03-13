import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {convertYodify} from '../actions/actions';
import {VoiceRecognition} from './VoiceRecognition';

class Input extends React.Component{
  constructor(){
    super();
    this.state = {
      message: ''
    };

    this.onRecordDone = this.onRecordDone.bind(this);
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

  onRecordDone(msg) {
    console.log('msg is', msg);
    this.setState({message: msg})
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
            <VoiceRecognition 
              onRecordDone={this.onRecordDone}
            />
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

Input.propTypes = {
  loading: PropTypes.bool
};

export default connect(mapStateToProps, matchDispatchToProps)(Input);
