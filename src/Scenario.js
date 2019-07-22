import React, {Component} from 'react';
import './App.css'
class Scenario extends Component {

    render () {
        return (
            <div>
            {this.props.header}
            <body> <p>Scenario Page.</p> </body>
            </div>
        )
    }

}

export default Scenario;