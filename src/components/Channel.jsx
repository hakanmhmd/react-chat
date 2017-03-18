import React from 'react';
import {List, ListItem} from 'material-ui/List';
import Actions from '../actions/index.js';

class Channel extends React.Component {
    constructor(props) {
        super(props);
    }

    onChannelClick() {
        Actions.channelOpened(this.props.channel);
    }

    render() {
        let style = {};
        if (this.props.channel.selected){
            style.backgroundColor = '#f0f0f0';
        }
        return (
            <ListItem 
                style={style}
                onClick={this.onChannelClick.bind(this)}>
                {this.props.channel.name}
            </ListItem>
        );
    }
}

export default Channel;