import React from 'react';
import Channel from './Channel.jsx';
import {Card} from 'material-ui/Card';
import {List} from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import connectToStores from 'alt-utils/lib/connectToStores';
import ChatStore from '../stores/ChatStore.js';
import CircularProgress from 'material-ui/CircularProgress';

@connectToStores
class ChannelList extends React.Component {
    constructor(props) {
        super(props);
        ChatStore.getChannels();
    }

    static getStores(){
        return [ChatStore];
    }

    static getPropsFromStores(){
        return ChatStore.getState();
    }

    render() {
        if(!this.props.channels){
            return (
                <Card style={{flexGrow: 1}}>
                    <CircularProgress
                        mode="indeterminate"
                        style={{
                            paddingTop: 60,
                            paddingBotton:20,
                            margin: '0 auto',
                            display: 'block',
                            width: '60px'
                        }} />
                </Card>
            );
        }
        

        var channelNodes = _(this.props.channels)
            .keys()
            .map((k) => {
                return (
                    <Channel key={k} channel={this.props.channels[k]} />
                );
            }).value();
        
        return (
            <Card style={{flexGrow: 1}}>
                <List>
                    <Subheader>Channels</Subheader>
                    {channelNodes}
                </List>
            </Card>
        );
    }
}

export default ChannelList;