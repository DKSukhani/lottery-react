import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import web3 from './web3';
import lottery from './lottery'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { manager: '' };
  }

  async componentDidMount() {
    const manager = await lottery.methods.manager().call();

    this.setState({ manager });
  }

  render() {
    console.log(web3.version);
    // web3.eth.getAccounts().then(console.log);
    console.log(lottery);

    return (
      <div>
        <p>the manager of the contract is {this.state.manager} </p>
      </div>
    );
  }
}

export default App;
