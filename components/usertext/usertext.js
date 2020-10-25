import React from 'react';
import Title from '../usertext/title/title';
import Num from '../usertext/num/num';

class Usertext extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      text: this.props.text,
      flag: false
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleFlagChange = this.handleFlagChange.bind(this)
  }
  handleChange (e) {
    this.setState({
      text: e.target.value
    })
  }

  handleFlagChange() {
    this.setState({flag: !this.state.flag})
  }

  render() {
    return(
      <div>
        <input
          type='text'
          onChange={this.handleChange}
          value={this.state.text}
        />
        <button onClick={this.handleFlagChange}>PUSH ME</button>
        {this.state.flag && <Title title={this.state.text} />}
      </div>
    )
  }
}

export default Usertext;