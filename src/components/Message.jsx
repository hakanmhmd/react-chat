import React from 'react';
import Avatar from 'material-ui/Avatar';
import {List, ListItem} from 'material-ui/List';

class Message extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <ListItem
                leftAvatar={<Avatar src={this.props.avatar} />}
            >{this.props.message}</ListItem>
        );
    }
}

export default Message;