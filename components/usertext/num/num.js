import React from "react";

class Num extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <button onClick={(event => this.props.func(Math.random()))}>Push</button>
      </div>
    )
  }
}

export default Num;
