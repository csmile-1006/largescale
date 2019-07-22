import React, {Component} from 'react';
import Button from 'react-bootstrap/Button';
import Discription from './Description'

class Home extends Component {

    // state = {
    //     stage : ['intro', 'scenario', 'inst'],
    //     stage_id: 0,
    // }

    next_stage = (param) => {
        this.props.set_stage(this.props.stage_id + 1)
    }

    next_page = (param) => {
        this.props.set_page(this.props.page_id + 1)
    }

    render () {
            let content;
            var stage = this.props.stage[this.props.stage_id];
            switch(stage) {
                case 'intro':
                    content = <div>
                                {this.props.header}
                                    <body>
                                    <p style={{"font-weight" : "bold"}}>This is the prototype of AI Rights Large Scale. This program is based on Moral machine. </p>
                                    <p style={{"margin-bottom" : "30px"}}>We are now conducting research on the possibility of an electronic legal personhood, under which AI and robots would be granted rights and duties similarly to corporations. 
                                        Now, we are gathering opinions on the issue by promoting a discussion about the topic on Reddit. We would like to invite all of you to check it out and participate. 
                                        In the threads we created, we have a short video and introduction about the topic for some background on the issue. 
                                        If you have any comments, feel free to share them in the Reddit threads linked below! Thank you!</p>
                                    <div className = "ButtonMargin"><Button variant="danger" className="ButtonWidth" onClick = {()=>this.next_page(1)}> Start </Button></div>
                                    <div className = "ButtonMargin"><Button variant="danger" className="ButtonWidth" onClick = {()=>this.next_stage(1)}> View Instructions </Button></div>
                
                                    <a href="https://ds.kaist.ac.kr"><img src="https://cdn-img.microrobotresear.ch/KAIST_logo-01.png" alt="KAIST_LOGO" style={{"margin-top" : "30px", "width" : "300px", "height" : "auto"}}></img></a>
                                    </body>
                            </div>
                    break;

                case 'discription':
                    content = <div>
                                <Discription header ={this.props.header}/>
                            </div>
                    break;

                default:
                    alert("ERROR");
            }
            return (
                <div>
                    {content}
                </div>
            )
        }
}

export default Home;