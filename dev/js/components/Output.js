import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

class Output extends Component{
  render(){
    return (
      this.props.yodifiedMessage 
      ? <div>
        <h2>{this.props.yodifiedMessage}</h2>
      </div>
      : null
    );
  }
}

function mapStateToProps(state) {
  return{
    yodifiedMessage: state.message.yodifiedMessage
  };
}

export default connect(mapStateToProps)(Output);