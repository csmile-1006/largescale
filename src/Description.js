import React, {Component} from 'react';
import './App.css'
class Description extends Component {

    render () {
        return (
            <div>
            {this.props.header}
            <body> <p>Description Page.</p></body>
            </div>
        )
    }

}

export default Description;