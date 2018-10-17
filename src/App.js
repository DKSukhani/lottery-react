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
    value: ''
  };

  async componentDidMount() {
    const manager = await lottery.methods.manager().call();
    const players = await lottery.methods.getPlayers().call();
    const balance = web3.utils.fromWei((await web3.eth.getBalance(lottery.options.address)), "ether");
    this.setState({ manager, players, balance });
  }

  onSubmit = async (event) => {
    event.preventDefault();
    const accounts = web3.eth.getAccounts();

    await lottery.methods.enterLotteryContract().send({
      from: accounts[0],
      value: web3.utils.toWei(this.state.value, 'ether')
    });

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
        <p>There are currently {this.state.players.length} account(s) who have participated in the Lottery.  The total size of the pool is {this.state.balance} ether.</p>

        <hr />
        <form onSubmit={this.onSubmit}>
          <h4>Want to try your luck</h4>
          <div>
            <label>Amount of Ether to enter</label>
            <input value={this.state.value} onChange={event => this.setState({ value: event.target.value })} />
          </div>
          <button>Enter</button>
        </form>

      </div>
    );
  }
}

export default App;
