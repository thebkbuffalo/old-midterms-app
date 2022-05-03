
import React, { Component } from "react";
import axios from "axios";
import config from '../config.js';

class MidtermInfoContainer extends Component {
  constructor(props){
    super(props); 
    this.state = {
      elections: [],
      reps: [],
      voterInfo: []
    } 
  }
  loadElectionsData(){
    var key = config.civics_api.KEY;
    axios
      .get(`https://www.googleapis.com/civicinfo/v2/elections?key=${key}`)
      .then((res)=>{
        this.setState({elections: res.data.elections})
      })
      .catch((error)=>console.log(error));
  }
  componentDidMount(){
    this.loadElectionsData();
  }
  getData = (e) => {
    if(e.keyCode==13){
      var key = config.civics_api.KEY;
      var addy = document.getElementById('addyInput').value;
      axios
        .get(`https://www.googleapis.com/civicinfo/v2/representatives?address=${addy}&key=${key}`)
        .then((res)=>{
          this.setState({reps: res.data.officials})
        })
        .catch((error)=>console.log(error));
    }
  }
  // showElections = (e) => {
  //   var btnText = document.getElementById('showElectionsBtn').innerHTML
  //   if(btnText.includes('Show')){

  //   }
  // }

  render(){
    return (
      <div>
        <div id='upcomingElections'>
          <div id='electionsList'>
            {this.state.elections.map((election)=>{
              <p key={election.id}>{election.name}</p>
            })}
          </div>
          {/* <button id='showElectionsBtn' onClick={this.showElections}>Show Upcoming Elections</button> */}
        </div>
        <p>Zip Code: <input id='addyInput' type="text" placeholder="Zip Code" onKeyDown={(e)=>this.getData(e)}/></p>
        <p>React is weird. Either way here's your local voting info</p>
        <ul>
          {this.state.reps.map((official)=>{
            return (
              <li key={official.name}>{official.name}</li>
            )
          })}
        </ul>
      </div>
    )
  }
}

export default MidtermInfoContainer