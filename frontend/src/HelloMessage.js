import React from 'react';

class HelloMessage extends React.Component {
    render() {
        return (
            <div>
                Olá, {this.props.name}!
            </div>
        );
    }
}

export default HelloMessage;