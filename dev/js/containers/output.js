import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

class YodifiedMessage extends Component {
  render() {
    if (!this.props.yodifiedMessage) {
      return null;
    } else {
      return (
        <div>
          <h2>{this.props.yodifiedMessage}</h2>
        </div>
      );
    }
  }
}

function mapStateToProps(state) {
  return {
    yodifiedMessage: state.message.yodifiedMessage
  };
}

export default connect(mapStateToProps)(YodifiedMessage);