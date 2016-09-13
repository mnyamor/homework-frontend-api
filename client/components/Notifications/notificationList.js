import React, {Component } from 'react';
import Notifications from './notifications';
import { connect } from 'react-redux';
import { deleteNotification } from '../../actions/notifications';

class NotificationList extends Component {
  render() {
    const messages = this.props.messages.map(message =>
      <Notifications key={message.id} message={message} deleteNotification={this.props.deleteNotification} />
    );
    return (
      <div>{messages}</div>
    );
  }
}

NotificationList.propTypes = {
  messages: React.PropTypes.array.isRequired,
  deleteNotification: React.PropTypes.func.isRequired
}

function mapStateToProps(state) {
  return {
    messages: state.notifications
  }
}

export default connect(mapStateToProps, { deleteNotification })(NotificationList);
