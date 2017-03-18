import React from 'react';
import Message from './Message.jsx';
import {Card} from 'material-ui/Card';
import {List} from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import firebase from '../../database.js';
import connectToStores from 'alt-utils/lib/connectToStores';
import ChatStore from '../stores/ChatStore.js';
import CircularProgress from 'material-ui/CircularProgress';
import _ from 'lodash';

@connectToStores
class MessageList extends React.Component {
    constructor(props) {
        super(props);
    }

    static getStores(){
        return [ChatStore];
    }

    static getPropsFromStores(){
        return ChatStore.getState();
    }

    render() {
        let messageNodes = null;

        if(!this.props.messagesLoading){
            messageNodes = _.values(this.props.messages).map((message) => {
                return (
                    <Message key={message.key} avatar={message.profilePic} message={message.text} />
                );
            });
        } else {
            messageNodes = <CircularProgress mode="indeterminate"
                style={{
                    paddingTop: 20,
                    paddingBottom: 20,
                    margin: '0 auto',
                    display: 'block',
                    width: '60px'
                }} />;
        }

        

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