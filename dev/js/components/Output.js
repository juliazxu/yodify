import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {VoicePlayer} from './VoicePlayer';

export class Output extends React.Component{
  render(){
    return (
      this.props.yodifiedMessage && !this.props.loading
      ? <div className="centered">
        <VoicePlayer 
          yodifiedMessage={this.props.yodifiedMessage} 
        />
        <span className="h2">
          {this.props.yodifiedMessage}
        </span>
      </div>
      : null
    );
  }
}

const mapStateToProps = state => {
  return{
    yodifiedMessage: state.message.yodifiedMessage,
    loading: state.message.loading
  }
}

Output.propTypes = {
  yodifiedMessage: PropTypes.string,
  loading: PropTypes.bool
};

export default connect(mapStateToProps)(Output);