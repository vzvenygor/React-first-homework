import React from "react";
import Num from "../num/num";

class NumOutput extends React.Component {
  constructor() {
    super();
      
    this.state = {
      number: 1000
    }

    this.numOutput = this.numOutput.bind(this)
  }


  numOutput(e) {
    this.setState({number: this.state.number * e})
  }

  render() {
    return (
      <div>
        <h1>Random Number is: {this.state.number}</h1>
        <Num func={this.numOutput} />
      </div>
    )
  }
}

export default NumOutput;