import React from 'react';

class Message extends React.Component {
    constructor(){
        super();
    }

    render() {
        return (
            <div>{this.props.message}</div>
        );
    }
}

export default Message;