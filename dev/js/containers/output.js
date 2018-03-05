import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

/*
 * We need "if(!this.props.user)" because we set state to null by default
 * */

class Output extends Component {
    render() {
        if (!this.props.yodifiedMessage) {
            return (<div></div>);
        }
        return (
            <div>
                <h2>This is what Yoda says.</h2>
            </div>
        );
    }
}

// Get apps state and pass it as props to UserList
//      > whenever state changes, the UserList will automatically re-render
function mapStateToProps(state) {
    return {
        yodifiedMessage: state.yodifiedMessage
    };
}

export default connect(mapStateToProps)(Output);