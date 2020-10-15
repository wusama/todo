import React, { Component } from 'react';
import './index.less';

class Index extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };

    this.add = this.add.bind(this);
  }
  add() {
    var count = this.state.count + 1;
    this.setState({ count });
  }
  render() {
    var { count } = this.state;
    return (
      <div className="clickPage">
        <h1>你点击了{count}下</h1>
        <input type="button" className="btn" value="+1" onClick={this.add} />
      </div>
    );
  }
}

export default Index;
