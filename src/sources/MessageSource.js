import Actions from '../actions/index';
import firebase from '../../database';

let MessageSource = {
    getMessages: {
        remote(state) {
            return new Promise((resolve, reject) => {
                firebase.database().ref('/messages').once("value", (snap) => {
                    var messages = snap.val();
                    resolve(messages);
                })
            });
        },
        success: Actions.messagesReceived,
        error: Actions.messagesFailed
    }
};



export default MessageSource;