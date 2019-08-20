import React, { Component } from 'react';
	
class ResultMessage extends Component {

    // Timeout au bout de 5s le message disparait
    componentDidMount() {
        setTimeout(() => {
            this.props.clearResult();
        }, 5000)
    }

    render() {
    return(
        // le className prend le type d'err (failure ou success) puis on injecte le message correspondant
        <div className={`result ${this.props.type}`}>
            {this.props.message}
        </div>
    );
    }
}

export default ResultMessage;