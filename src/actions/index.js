import alt from '../alt/index';
import firebase from '../../database.js';

class Actions {
    constructor(){
        this.generateActions(
            'channelsReceived',
            'channelsFailed',
            'messagesRecevied',
            'messagesFailed'
        );
    }

    login(args){
        return (dispatch) => {
            var auth = firebase.auth();

            var provider = new firebase.auth.GoogleAuthProvider();
        //     auth.signInWithPopup(provider).then(function(result) {
        //         // User signed in!
        //         var uid = result.user.uid;
        //         console.log(result)
        //         dispatch(uid);
        //     }).catch(function(error) {
        //         // An error occurred
        //         return;
        //     });
            dispatch("Hakan");
         }      
    }
}

export default alt.createActions(Actions);