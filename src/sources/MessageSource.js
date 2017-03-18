import Actions from '../actions/index';
import firebase from '../../database';

let ref = null;

let MessageSource = {
    getMessages: {
        remote(state) {
            if(ref){
                ref.off()
            }
            ref = firebase.database().ref('/messages/' + state.selectedChannel.key);
            return new Promise((resolve, reject) => {
                ref.once("value", (snap) => {
                    var messages = snap.val();
                    resolve(messages);
                });

                ref.on("child_added", msg => {
                    let msgVal = msg.val();
                    msgVal.key = msg.key;
                    Actions.messageReceived(msgVal);
                })
            });
        },
        success: Actions.messagesReceived,
        error: Actions.messagesFailed,
        loading: Actions.messagesLoading
    },

    sendMessage: {
        remote(state) {
            return new Promise((resolve, reject) => {
                if(!ref){
                    return resolve()
                }
                ref.push({
                    "text": state.messageToSend,
                    "date": new Date().toUTCString(),
                    "author": state.user,
                    "profilePic": "https://lh5.googleusercontent.com/aMtc8NcVRue9OYFhRsozCIWaXo9KlQnhvGXXzqActEViVetMrYCFGY98ZqCw-FmCKWAJcR3COjGUxwIucK0p9u9sTu3ih4-7Fyg5_mGLSrbwQUJOOFKSAdXPLA73RLSNSIzaU4QA"
                });
                resolve();
            });
        },
        success: Actions.messageSendSuccess,
        error: Actions.messageSendError
    }
};



export default MessageSource;