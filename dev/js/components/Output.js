import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {VoicePlayer} from './VoicePlayer';

class Output extends Component{
  render(){
    return (
      this.props.yodifiedMessage && !this.props.loading
      ? <div>
        <h2>
          <VoicePlayer 
            yodifiedMessage={this.props.yodifiedMessage} 
          />
          {this.props.yodifiedMessage}
        </h2>
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

Output.propTypes = {
  yodifiedMessage: PropTypes.string,
  loading: PropTypes.bool
};

export default connect(mapStateToProps)(Output);