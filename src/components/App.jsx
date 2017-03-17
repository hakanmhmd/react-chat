import React, {Component} from 'react';
import MessageList from './MessageList.jsx';
import ChannelList from './ChannelList.jsx';
import MessageBox from './MessageBox.jsx';
import Login from './Login.jsx';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import AppBar from 'material-ui/AppBar';
import {deepOrange500} from 'material-ui/styles/colors';
import connectToStores from 'alt-utils/lib/connectToStores';
import ChatStore from '../stores/ChatStore.js';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

const muiTheme = getMuiTheme({
    appBar: {
        height: 70
    }
});

@connectToStores
class App extends Component {
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
        var view = <Login />;
        if(this.props.user){
            view = (
            <div>
                <div style={{
                    display: 'flex',
                    flexFlow: 'row wrap',
                    maxWidth: 1200,
                    width: '100%',
                    margin: '30px auto 30px'
                }}>
                    <ChannelList />
                    <MessageList />
                            
                </div> 
                <MessageBox /> 
            </div>);
        }
        return (
            <MuiThemeProvider muiTheme={muiTheme}>
                <div>
                    <AppBar title="React chat app"/>
                    {view}                   
                </div>
            </MuiThemeProvider>
                    
        );
    }
}

export default App;