import React, {Component} from 'react';
import './App.css'
class About extends Component {

    render () {
        return (
            <div>
            {this.props.header}
            <body> <p>About Page.</p> </body>
            </div>
        )
    }

}

export default About;