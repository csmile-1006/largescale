import React, {Component} from 'react';
import './App.css'
import {Button, Image} from 'react-bootstrap'
import Statistics from './Statistics';
import {scenario_list,makeIndex, scenario_order} from './Data'

class Scenario extends Component {


    state = {
        stage_id: 0,
        stage: ["intro", "main", "statistics"],
        main_id: 1,
        total_question: scenario_list.length,
        index: makeIndex (scenario_list.length),
        question_order: scenario_order(scenario_list.length),
        path: "",
    }

    next_stage = () => {
        this.setState({stage_id: this.state.stage_id + 1})
    }

    next_question = () => {
        if (this.state.main_id === this.state.total_question){
            this.next_stage();
            return
        }
        this.setState({main_id: this.state.main_id + 1});
    }

    render () {
        var stage = this.state.stage[this.state.stage_id];
        var current_question = this.state.question_order[this.state.main_id - 1];
        var current_index = this.state.index[this.state.main_id - 1];
        let content;
        switch(stage) {
            case ("intro"):
                content  = 
                <div>
                    <h3 style={{"margin" : "30px"}}>
                        The year is 2050 and the population of autonomous AI robots has just reached its peak and has equalized the human population. <br/>
                        Your decisions on how to react to the following scenarios will set the future of both humans and robots.
                    </h3>
                    <Button variant = "info" onClick = {()=>this.next_stage()}>Start</Button>
                </div>
                break;
            case ("main"):
                content =
                <div>
                    <h3>{scenario_list[current_question].content[current_index].question}</h3>
                    <Image src = {scenario_list[current_question].content[current_index].image} style = {{"width" : "500px", "height" : "350px", "margin" : "30px"}}/>
                    <div>
                        <Button variant="success" className="ButtonMargin" onClick = {()=>this.next_question()}>{scenario_list[current_question].content[current_index].choice[0]}</Button>
                        <Button variant="warning" className="ButtonMargin" onClick = {()=>this.next_question()}>{scenario_list[current_question].content[current_index].choice[1]}</Button>
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