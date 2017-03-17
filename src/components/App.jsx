import React, {Component} from 'react';
import MessageList from './MessageList.jsx';
import material from 'material-ui';

var ThemeManager = new material.Styles.ThemeManager();
var Colors = material.Styles.Colors;
var AppBar = material.AppBar;

class App extends Component {
    constructor() {
        super();
        ThemeManager.setPalette({
            primary1Color: Colors.blue500,
            primary2Color: Colors.blue700,
            primary3Color: Colors.blue100,
            accent1Color: Colors.pink400,
        });
    }
    static childContextTypes = {
        muiTheme: React.PropTypes.object
    };

    getChildContext() {
        return {
            muiTheme: ThemeManager.getCurrentTheme()
        }
    }

    render() {
        return (
            <MessageList />
        );
    }
}

export default App;