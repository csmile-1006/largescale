import React, {Component} from 'react';
import './App.css'
import Button from 'react-bootstrap/Button';
class Statistics extends Component {

    render () {
        return (
            <div>
                {this.props.header}
                <body>
                    <p>Statistics page.</p>
                    <Button onClick={()=>this.props.goHome_default()}>OK</Button>
                </body>
            </div>
        )
    }

}

export default Statistics;