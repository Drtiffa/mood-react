import React, { Component } from 'react';
	
class ResultMessage extends Component {

    componentDidMount() {
        setTimeout(() => {
            this.props.clearResult();
        }, 5000)
    }

    render() {
    return(
        <div className={`result ${this.props.type}`}>
            {this.props.message}
        </div>
    );
    }
}

export default ResultMessage;