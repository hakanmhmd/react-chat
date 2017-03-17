import React from 'react';
import {List, ListItem} from 'material-ui/List';

class Channel extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <ListItem
                primaryText={this.props.channel}
            />
        );
    }
}

export default Channel;