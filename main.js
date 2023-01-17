let accounts;

window.onload = function(){
  this.console.log('DApp is loaded');
}

const enableEth = async () => {
  accounts = await window.ethereum.request({
                method: "eth_requestAccounts",
            }).catch((err) => {
    console.log(err.code);
  })
  console.log(accounts);
  document.getElementById('connection').innerHTML = 'Connection Status: Connected'
}

const checkEthBalance = async () => {
  let balance = await window.ethereum.request({
    method: 'eth_getBalance',
    params:[accounts[0]]
  }).catch((err) => {
    console.log(err)
  });

  balance = parseInt(balance)
  balance = balance / Math.pow(10,18)
  console.log(balance);
  document.getElementById('balance').innerHTML = balance
}
