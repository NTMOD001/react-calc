import React, { Component } from 'react';
import { connect } from 'react-redux'
import Display from './components/Display'
// import Pad from './components/Pad'
import Panel from './components/Panel'
import './App.css';

export class App extends Component {

  state = {
    count: '0',
    valid: true
  }
  process = (key) => {
    //console.log(key);
    switch (key) {
      case "=":
        this.calculate();
        break;
      case ".":
        this.addDot();
        break;
      case "AC":
        this.reset();
        break;
      case "Del":
        this.delete();
        break;
      default:
        this.handle(key);
        break;
    }
  }

  calculate = () => {
    const { count, valid } = this.state;
    try {
      //console.log(count);
      var result = eval(count)
      //console.log(result);
      this.setState({
        count: result
      })
    } catch (err) {
      this.setState({
        count: 'error'
      })
    }

  }

  addDot = () => {
    const { count } = this.state;
    this.setState({
      count: count + '.'
    })

  }

  reset = () => {
    //console.log('all clear');
    const { count } = this.state;
    this.setState({
      count: '0'
    })
  }

  delete = () => {
    //console.log('del');
    const { count } = this.state;
    //console.log(count.length);
    //console.log(count);
    if (count.length > 1 && count !== 'error') {
      this.setState({
        count: count.substring(0, count.length - 1)
      })
    } else if (count === 'error') {
      this.setState({
        count: '0'
      })
    } else {
      this.setState({
        count: '0'
      })
    }

  }

  handle = (key) => {
    //console.log('handle', key);
    var operator = ['+', '-', '*', '/']
    if (operator.indexOf(key) !== -1) {
      this.setState({

      })
    }
    const { count } = this.state;
    this.setState({
      count: count === '0' ? String(key) : count + key
    })
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div>
            <Display value={this.state.count} />
            <Panel calculate={this.process} />
          </div>

        </header>
      </div>
    );
  }
}

export default App;
