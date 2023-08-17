document.querySelector('.deposit-btn').addEventListener('click', ()=>{
    const currentDeposit =  getInputById('deposit-input');
    const previousDepositTotal = getElementById('deposit');
    const depositTotal = previousDepositTotal + currentDeposit;

    const previousBalanceTotal = getElementById('balance');

    const totalBalance = previousBalanceTotal + currentDeposit;
    displayAmount('deposit', depositTotal)
    displayAmount('balance', totalBalance)
});
