import alt from '../alt/index';
import Actions from '../actions/index';
import {decorate, bind, datasource} from 'alt-utils/lib/decorators';
import ChannelSource from '../sources/ChannelSource.js';
import MessageSource from '../sources/MessageSource.js';
import _ from 'lodash';

@datasource(ChannelSource, MessageSource)
@decorate(alt)
class ChatStore {
    constructor(){
        this.state = {
            user: null, 
            messages: [],
            selectedChannel: null,
            channels: [],
            messagesLoading: true
        };
    }

    @bind(Actions.login)
    login(user){
        this.setState({user: user})
    }

    @bind(Actions.messagesLoading)
    messagesLoading(){
        this.setState({messagesLoading: true})
    }

    @bind(Actions.messagesReceived)
    receviedMessages(messages) {
        _(messages).keys().each((k) => {
            messages[k].key = k;
        });

        this.setState({messages, messagesLoading: false});
    }

    @bind(Actions.messageReceived)
    messageReceived(msg){
        if(this.state.messages != null){
            if(this.state.messages[msg.key]){
                return;
            }
            
            this.state.messages[msg.key] = msg;
            this.setState({messages: this.state.messages});
        }  
    }

    @bind(Actions.sendMessage)
    sendMessage(message){
        this.state.messageToSend = message;
        setTimeout(this.getInstance().sendMessage, 100);
    }

    @bind(Actions.channelOpened)
    channelOpened(selectedChannel){
        _(this.state.channels).values().each(channel => {
            channel.selected = false;
        });
        

        selectedChannel.selected = true;
        this.setState({selectedChannel, channels: this.state.channels});
        setTimeout(this.getInstance().getMessages, 100);
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

        setTimeout(this.getInstance().getMessages, 100);
    }

    
}

export default alt.createStore(ChatStore);