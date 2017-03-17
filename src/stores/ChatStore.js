import alt from '../alt/index';
import Actions from '../actions/index';
import {decorate, bind, datasource} from 'alt-utils/lib/decorators';
import ChannelSource from '../sources/ChannelSource.js';
import MessageSource from '../sources/MessageSource.js';
import _ from 'lodash';

@datasource(ChannelSource)
@datasource(MessageSource)
@decorate(alt)
class ChatStore {
    constructor(){
        this.state = {user: null};
    }

    @bind(Actions.login)
    login(user){
        this.setState({user: user})
    }

    @bind(Actions.channelsReceived)
    receviedChannels(channels) {
        let selectedChannel;
        _(channels).keys().each((key, index) => {
            channels[key].key = key;
            if(index == 0){
                channels[key].selected = true;
                selectedChannel = channels[key];
            }
        });

        this.setState({channels, selectedChannel});
    }

    @bind(Actions.messagesReceived)
    receviedMessages(messages) {
        console.log('HIYA')
        console.log(messages)
    }
}

export default alt.createStore(ChatStore);