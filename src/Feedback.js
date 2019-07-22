import React, {Component} from 'react';
import './App.css'
class Feedback extends Component {

    render () {
        return (
            <div>
            {this.props.header}
            <body> <p>Feedback Page.</p> </body>
            </div>
        )
    }

}

export default Feedback;