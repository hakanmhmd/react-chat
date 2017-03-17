import React from 'react';
import Message from './Message.jsx';
import {Card} from 'material-ui/Card';
import {List} from 'material-ui/List';
import Subheader from 'material-ui/Subheader';

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
            <Card style={{
                flexGrow: 2,
                 marginLeft: 30
            }}>
                <List>
                    <Subheader>Recent chats</Subheader>
                    {messageNodes}
                </List>
            </Card>
        );
    }
}

export default MessageList;