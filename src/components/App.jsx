import React, {Component} from 'react';
import MessageList from './MessageList.jsx';
import ChannelList from './ChannelList.jsx';
import MessageBox from './MessageBox.jsx';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import AppBar from 'material-ui/AppBar';
import {deepOrange500} from 'material-ui/styles/colors';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

const muiTheme = getMuiTheme({
    appBar: {
        height: 70
    }
});

class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <MuiThemeProvider muiTheme={muiTheme}>
                <div>
                    <AppBar title="React chat app"/>
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
                </div>
            </MuiThemeProvider>
                    
        );
    }
}

export default App;