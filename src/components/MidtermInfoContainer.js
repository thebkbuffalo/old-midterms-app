
import React, { Component } from "react";
import axios from "axios";
import config from '../config.js';

class MidtermInfoContainer extends Component {
  constructor(props){
    super(props); 
    this.state = {
      elections: [],
      reps: []
    } 
  }

  getData = (e) => {
    if(e.keyCode==13){
      var key = config.civics_api.KEY;
      var addy = document.getElementById('addyInput').value;
      axios
        .get(`https://www.googleapis.com/civicinfo/v2/representatives?address=${addy}&key=${key}`)
        .then((res)=>{
          this.setState({reps: res.data.officials})
        }).catch((error)=>console.log(error));
    }
  }

  render(){
    return (
      <div>
        <input id='addyInput' type="text" placeholder="address" onKeyDown={(e)=>this.getData(e)}/>
        <p>React is weird. Either way here's your local voting info</p>
        <ul>
          {this.state.reps.map((official)=>{
            return (
              <p key={official.name}>{official.name}</p>
            )
          })}
        </ul>
      </div>
    )
  }
}

export default MidtermInfoContainer