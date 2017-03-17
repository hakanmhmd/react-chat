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
                primaryText={this.props.message}
                leftAvatar={<Avatar src={this.props.avatar} />}
            />
        );
    }
}

export default Message;