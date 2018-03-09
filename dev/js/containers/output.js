import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

class YodifiedMessage extends Component{
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

export default connect(mapStateToProps)(YodifiedMessage);