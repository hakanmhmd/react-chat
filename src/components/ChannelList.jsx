import React from 'react';
import Channel from './Channel.jsx';
import {Card} from 'material-ui/Card';
import {List} from 'material-ui/List';
import Subheader from 'material-ui/Subheader';

class ChannelList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            channels: ['channel1', 'channel2']
        }
    }

    render() {
        var channelNodes = this
            .state
            .channels
            .map((channel) => {
                return (
                    <Channel key={channel} channel={channel} />
                );
            });

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