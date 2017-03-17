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
                leftAvatar={<Avatar src = "https://lh5.googleusercontent.com/aMtc8NcVRue9OYFhRsozCIWaXo9KlQnhvGXXzqActEViVetMrYCFGY98ZqCw-FmCKWAJcR3COjGUxwIucK0p9u9sTu3ih4-7Fyg5_mGLSrbwQUJOOFKSAdXPLA73RLSNSIzaU4QA" />}
            />
        );
    }
}

export default Message;