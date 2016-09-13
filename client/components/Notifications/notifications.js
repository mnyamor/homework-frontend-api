import React, { Component } from 'react';
import classnames from 'classnames';

export default class Notification extends Component {
  
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    this.props.deleteNotification(this.props.message.id);
  }

  render() {
    const { id, type, text } = this.props.message;
    return (
      <div className={classnames('alert', {
        'alert-success': type === 'success',
        'alert-danger': type === 'error'
      })}>
        <button onClick={this.onClick} className="close"><span>&times;</span></button>
        {text}
      </div>
    );
  }
}

Notification.propTypes = {
  message: React.PropTypes.object.isRequired,
  deleteNotification: React.PropTypes.func.isRequired
}


