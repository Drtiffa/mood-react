import React, { Component } from 'react';
	
class ResultMessage extends Component {

    // Timeout after 5s the message disappears
    componentDidMount() {
        setTimeout(() => {
            this.props.clearResult();
        }, 5000)
    }

    render() {
    return(
        // className take type err (failure or success) then inject the corresponding message
        <div className={`result ${this.props.type}`}>
            {this.props.message}
        </div>
    );
    }
}

export default ResultMessage;