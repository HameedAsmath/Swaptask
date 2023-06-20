import React from 'react';
import BgImage from "../src/assets/wp5698286-best-itachi-desktop-wallpapers.jpg"
import "../src/App.css"
import { useState } from 'react';

function App() {

  const [walletAddress, setWallet] = useState("");

  async function eth_requestAccount() {
    console.log('Requesting account...')

    if (window.ethereum) {
      console.log('detected');
      try {
        const accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
        });
        setWallet(accounts[0]);
        console.log(accounts);
      } catch (error) {
        console.log('Error connecting....');

      }
    }
    else {
      
      console.log('Meta Mask not detected')

    }
  }
  return (
    <div class='container'>
      <img className='bg-img' src={BgImage} alt='...'></img>
      <div className='token'>
        <h1>Swapping tokens</h1>
        <div>
          <div class="box box1">
            <div className='token1'> Token A
            </div>
            <input className='box' type='text' placeholder='Token 1' />
            <select className='coinA' name='coinA'>
              <option >ETH</option>
              <option >DAI</option>
              <option >WBTC</option>
              <option >USDT</option>
              <option >USDC</option>
              <option >WETH</option>
            </select>
          </div>
          <div class="box box2">
            <div className='token2'> Token B
            </div>
            <input className='box' type='text' placeholder='Token 2' />
            <select className='coinB' name='coinB'>
              <option >ETH</option>
              <option >DAI</option>
              <option >WBTC</option>
              <option >USDT</option>
              <option >USDC</option>
              <option >WETH</option>
            </select>
            <div>
            </div>
          </div>


          <button className='swap'>Swap</button>
          <button className='swap1'
            onClick={eth_requestAccount}
          >Connect Wallet</button>
          <h3 className='add'>Wallet Address :{walletAddress}</h3>


        </div>
      </div>
    </div>
  )
}

export default App;
