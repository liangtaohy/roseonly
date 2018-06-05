import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import './App.css';
import Web3 from 'web3';
import LoginModal from './LoginModal';

class App extends Component {
  web3Provider = null;
  web3 = null;

  constructor(props) {
    super(props);
    this.web3 = null;
    this.web3Provider = null;
    this.state = {
      accounts: [],
      loginModalVisible: false
    }
  }

  initWeb3 = () => {
    if (typeof window.web3 !== 'undefined') {
      this.web3Provider = window.web3.currentProvider;
      } else {
      // If no injected web3 instance is detected, fall back to Ganache
      this.web3Provider = new Web3.providers.HttpProvider('http://localhost:8545');
    }

    let that = this;

    this.web3 = new Web3(this.web3Provider);
    this.web3.eth.getAccounts().then(function (accounts) {
        that.web3.eth.getBalance(accounts[0]).then(function(balance) {
          that.setState({
            accounts: accounts,
            balance: that.web3.utils.fromWei(balance)
          });
        });
      }
    );
  }

  onBlock = () => {
    this.setState({loginModalVisible : true});
  };

  onBlockClose = () => {
    this.setState({loginModalVisible : false});
  };

  render() {
    //this.initWeb3();
    const { loginModalVisible } = this.state;
    
    return (
      <div className="App">
        <div>
          <h1>
            ROSE ONLY
            <br />
            <span>链上玫瑰 , 爱意永存</span>
          </h1>
          <hr />
          <p>
            亲爱的，我们上链吧！
          </p>
        </div>
        <div className="block_btn">
          {!loginModalVisible && <Button variant="raised" size="large" color="secondary" onClick={this.onBlock}>上&nbsp;&nbsp;链</Button>}
        </div>
        {loginModalVisible && <LoginModal open={loginModalVisible} onClose={this.onBlockClose} />}
      </div>
    );
  }
}

export default App;
