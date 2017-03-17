import React, {Component} from 'react';

class App extends Component {
    constructor() {
        super();
        this.state = {
            messages: ['xxxxxxx', 'mamtiaaaa']
        }
    }

    render() {
        
        var messageNodes = this
            .state
            .messages
            .map((message) => {
                return (
                    <div key={message}>{message}</div>
                );
            });
        
        return (
            <div>{messageNodes}</div>
        );
    }
}

export default App;