import React, {Component} from 'react';
import './App.css'
class Language extends Component {

    render () {
        return (
            <div>
            {this.props.header}
            <body> <p>Language Page.</p> </body>
            </div>
        )
    }

}

export default Language;