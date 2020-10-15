import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { get, post, remove } from '../../lib/http';
import './index.less';
var todoUrl = '/api/todo';

function fix(txt, length) {
  while (txt.toString().length < length) {
    txt = `0${txt}`;
  }
  return txt;
}
function format(time) {
  time = new Date(time);
  var y = time.getFullYear();
  var m = fix(time.getMonth() + 1, 2);
  var d = fix(time.getDate(), 2);
  var h = fix(time.getHours(), 2);
  var min = fix(time.getMinutes(), 2);
  var s = fix(time.getSeconds(), 2);
  return `${y}-${m}-${d} ${h}:${min}:${s}`;
}

class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      count: 0,
      items: [],
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.onSelectChange = this.onSelectChange.bind(this);
    this.getList = this.getList.bind(this);
  }
  onDelete(item) {
    remove(`${todoUrl}/${item.id}`).then(() => {
      this.getList();
    });
  }
  onChange(e) {
    this.setState({ text: e.target.value });
  }
  onSubmit(e) {
    if (e.keyCode != 13) {
      return;
    }
    var { text } = this.state;
    if (!text.length) {
      return;
    }
    post(todoUrl, { text }).then(() => {
      this.setState({ text: '' });
      this.getList();
    });
    e.preventDefault();
  }
  onSelectChange(item, i) {
    var { items } = this.state;
    var { id, done } = item;
    done = !done;
    items[i] = Object.assign({}, item, { done, updateTime: format(Date.now()) });
    post(todoUrl, { id, done });
    this.setState({ items });
  }
  getList() {
    get(todoUrl).then(data => {
      data.items.forEach(x => {
        if (x.created)
          x.createTime = format(x.created);
        if (x.updated && x.done)
          x.updateTime = format(x.updated);
      });
      this.setState(data);
    });
  }
  componentDidMount() {
    this.getList();
  }

  render() {
    var {
      count,
      text,
      items,
    } = this.state;
    return (
      <div className="indexPage">
        <h1>Todo</h1>
        <div><Link to="/click">click page</Link></div>
        <div className="input">
          <input type="text"
            value={text}
            onChange={this.onChange}
            onKeyDown={this.onSubmit}
          />
        </div>
        {items.length &&
        <ul className="list">
          {items.map((x, i) =>
            <li key={i} className={`item ${x.done ? 'done' : ''}`}>
              <input type="checkbox" checked={x.done}
                onChange={this.onSelectChange.bind(this, x, i)}
              />
              <span className="time">{x.done ? x.updateTime : x.createTime}</span>
              <span className="text">{x.text}</span>
              <span className="remove"onClick={this.onDelete.bind(this, x)}>X</span>
            </li>,
          )}
        </ul> ||
        <div className="center">请先创建todo项</div>
        }
        {items.length != count &&
          <div className="center">加载更多</div>
        }
        <div className="center">
          <span>{items.length}/{count}</span>
        </div>
      </div>
    );
  }
}

export default Index;
