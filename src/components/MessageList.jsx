import React from 'react';
import Message from './Message.jsx';

class MessageList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            messages: ['hello', 'hello2']
        }
    }

    render() {
        var messageNodes = this
            .state
            .messages
            .map((message) => {
                return (
                    <Message key={message} message={message} />
                );
            });

        return (
            <div>{messageNodes}</div>
        );
    }
}

export default MessageList;