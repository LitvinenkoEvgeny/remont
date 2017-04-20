import React, {Component} from 'react';

import MessageComponent from './MessageComponent';

class MessageContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="MessageContainer">
        <MessageComponent />
      </div>
  )}
}

export default MessageContainer;
