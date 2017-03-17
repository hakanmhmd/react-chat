import React from 'react';
import {Card} from 'material-ui/Card';
import trim from 'trim';
import database from '../../database.js';

class MessageBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            messageToSend: ''
        };
    }

    onChange(event){
        this.setState({messageToSend: event.target.value})
    }

    onKeyUp(event){
        if(event.keyCode === 13 && trim(event.target.value) != ''){
            event.preventDefault();
            this.setState({
                messageToSend: ''
            });

            database.ref('/messages').push({
                text: this.state.messageToSend,
                profilePic: "https://lh5.googleusercontent.com/aMtc8NcVRue9OYFhRsozCIWaXo9KlQnhvGXXzqActEViVetMrYCFGY98ZqCw-FmCKWAJcR3COjGUxwIucK0p9u9sTu3ih4-7Fyg5_mGLSrbwQUJOOFKSAdXPLA73RLSNSIzaU4QA",
                date: 'now'   
            });
        }

        
    }

    render() {
        return (
            <Card style={{
                maxWidth: 1200,
                margin:'30px auto',
                padding: 30
            }}>
                <textarea
                    onChange={this.onChange.bind(this)}
                    value={this.state.messageToSend}
                    onKeyUp={this.onKeyUp.bind(this)}
                    style={{
                        width: '100%',
                        border: '#d0d0d0',
                        resize: 'none',
                        borderRadius: 3,
                        minHeight: 50,
                        color: '#555',
                        fontSize: 14,
                        outline: 'auto 0px'
                }}/>
            </Card>
        );
    }
}

export default MessageBox;