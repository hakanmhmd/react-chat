import React from 'react';
import {Card, CardText} from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import Actions from '../actions/index.js';

class Login extends React.Component {
    onClick(){
        Actions.login();
    }
    render() {
        return (
            <Card style={{
                maxWidth: '800px',
                margin: '30px auto',
                padding: 50
            }}>
                <CardText style={{
                    textAlign: 'center'
                }}> Please login with your Google account
                </CardText>

                <RaisedButton 
                    style={{display: 'block'}}
                    onClick={this.onClick.bind(this)}
                    label={"Login with Google"} />
            </Card>
        );
    }
}

export default Login;