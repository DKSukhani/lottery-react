import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import web3 from './web3';
import lottery from './lottery'

class App extends Component {
  state = {
    manager: ' ',
    players: [],
    balance: '',
  };

  async componentDidMount() {
    const manager = await lottery.methods.manager().call();
    const players = await lottery.methods.getPlayers().call();
    const balance = web3.utils.fromWei((await web3.eth.getBalance(lottery.options.address)), "ether");
    this.setState({ manager, players, balance });
  }

  render() {
    // console.log(web3.version);
    // web3.eth.getAccounts().then(console.log);
    // console.log(lottery);

    return (
      <div>
        <p>Welcome to the Lottery Contract which is managed by {this.state.manager}.</p>
        <p>The address of the Contract is {lottery.options.address}</p>
        <br />
        <p>There are currently {this.state.players.length} account(s) who have participated in the Lottery.  The total size of the pool is {this.state.balance} ether</p>
      </div>
    );
  }
}

export default App;
