document.querySelector('.withdraw-btn').addEventListener('click', ()=> {
    const currentWithdraw = getInputById('withdraw-input');
    const previousWithdrawTotal = getElementById('withdraw');

    const totalWithdraw = previousWithdrawTotal + currentWithdraw;

    const previousBalanceTotal = getElementById('balance');

    const totalBalance = previousBalanceTotal - currentWithdraw;
    displayAmount('withdraw', totalWithdraw)
    displayAmount('balance', totalBalance)
})