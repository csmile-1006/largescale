import React, {Component} from 'react';
import './App.css'
import Button from 'react-bootstrap/Button';
class Language extends Component {

    render () {
        return (
            <div>
                {this.props.header}
                <div className="Description">
                    <body> 
                        <p>Choose your Language.</p>
                        <div style={{"AlignContent":"center"}}>
                            <Button variant="primary" className="ButtonMargin" onClick={()=>this.props.choose_language(0)}>Korean</Button>
                            <Button variant="primary" className="ButtonMargin" onClick={()=>this.props.choose_language(1)}>English</Button> 
                            <Button variant="primary" className="ButtonMargin">Spanish</Button>
                        </div>
                        
                    </body>
                </div>
                <div style={{"z-index":"1"}}>
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
            </div>
        )
    }

}

export default Language;