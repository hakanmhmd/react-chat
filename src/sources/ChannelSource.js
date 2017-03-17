import Actions from '../actions/index';
import firebase from '../../database';

let ChannelSource = {
    getChannels: {
        remote(state) {
            return new Promise((resolve, reject) => {
                firebase.database().ref('/channels').once("value", (snap) => {
                    var channels = snap.val();
                    resolve(channels);
                })
            });
        },
        success: Actions.channelsReceived,
        error: Actions.channelsFailed
    }
};



export default ChannelSource;