/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {Component} from 'react';
import './App.css';
import Scenario from './Scenario'
import About from './About'
import Feedback from './Feedback'
import Language from './Language'
import Home from './Home'
 class App extends Component {

  state = {
    header: <header>
              <div className = "wrapper">
                <h1>Large Scale</h1>
                <nav>
                  <ul className="menu">
                    <li><a href="" onClick={()=>this.goHome()}>Home</a></li>
                    <li><a href="#" onClick={()=>this.set_page(1)}>Try</a></li>
                    <li><a href="#" onClick={()=>this.set_page(2)}>About</a></li>
                    <li><a href="#" onClick={()=>this.set_page(3)}>Feedback</a></li>
                    <li><a href="#" onClick={()=>this.set_page(4)}>Language</a></li>
                  </ul>
                </nav>
              </div>
            </header>,
    page_id: 0,
    page : ['home','scenario','about','feedback','language'],
    stage_id: 0,
    stage : ['intro','discription'],
    language: 0
  }

  goHome = () => {
    this.setState({stage_id: 0, page_id: 0})
  }

  set_stage = (id) => {
    this.setState({stage_id: id})
  }

  set_page = (id) => {
    this.setState({page_id : id})
  }
  render () {
    let content;
    var stage = this.state.page[this.state.page_id];
    switch (stage){
      case 'home':
        content = <Home header={this.state.header} stage_id = {this.state.stage_id} stage = {this.state.stage} set_stage = {this.set_stage}
                   page_id = {this.state.page_id} set_page = {this.set_page}/>
        break;
      case 'scenario':
        content = <Scenario header = {this.state.header} />;
        break;

      case 'about':
        content = <About header = {this.state.header} />;
        break;

      case 'feedback':
        content = <Feedback header = {this.state.header} />;
        break;

      case 'language':
        content = <Language header = {this.state.header} />;
        break;

      default:
        alert("You don't have to come here.")
    }
    return (
      <div>
        {content}
      </div>
    );
  }
}


export default App;
