import React, {Component} from 'react';
import './App.css'
import {Button, Image} from 'react-bootstrap'
import Statistics from './Statistics';

class Scenario extends Component {


    state = {
        stage_id: 0,
        stage: ["intro", "main", "statistics"],
        main_id: 0,
        total_question: 10
    }

    next_stage = () => {
        this.setState({stage_id: this.state.stage_id + 1})
    }

    next_question = () => {
        if (this.state.main_id === this.state.total_question){
            this.setState({stage_id: this.state.stage_id + 1});
            return
        }
        this.setState({main_id: this.state.main_id + 1});
    }

    render () {
        var stage = this.state.stage[this.state.stage_id];
        let content;
        switch(stage) {
            case ("intro"):
                content  = 
                <div>
                    <p>
                        The year is 2050 and the population of autonomous AI robots has just reached its peak and has equalized the human population. 
                        Your decisions on how to react to the following scenarios will set the future of both humans and robots.
                    </p>
                    <Button variant = "info" onClick = {()=>this.next_stage()}>Start</Button>
                </div>
                break;
            case ("main"):
                content =
                <div>
                    <h3>Question</h3>
                    <Image style={{"margin" : "30px"}} src = "https://via.placeholder.com/300" fluid/>
                    <div>
                        <Button variant="success" className="ButtonMargin" onClick = {()=>this.next_question()}>YES</Button>
                        <Button variant="success" className="ButtonMargin" onClick = {()=>this.next_question()}>NO</Button>
                    </div>
                    <div style={{'textAlign' : 'right'}}>
                        {this.state.main_id} / {this.state.total_question}
                    </div>
                </div> 
                break;

            case "statistics":
                content = <Statistics goHome = {this.props.goHome} />
                break;
            default:
                alert("YOU MUST NOT BE HERE.");
        }

        return (
            <div>
            {this.props.header}
            <body className="content">
                 {content}
            </body>
            </div>
        )
    }

}

export default Scenario;