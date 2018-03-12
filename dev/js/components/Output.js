import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

class Output extends Component{
  render(){
    return (
      this.props.yodifiedMessage && !this.props.loading
      ? <div>
        <h2>{this.props.yodifiedMessage}</h2>
      </div>
      : null
    );
  }
}

const mapStateToProps = state => {
  return{
    yodifiedMessage: state.message.yodifiedMessage,
    loading: state.message.loading
  };
}

Output.PropTypes = {
  yodifiedMessage: PropTypes.string,
  loading: PropTypes.boolean
};

export default connect(mapStateToProps)(Output);