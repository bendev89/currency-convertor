const firstCurrency = document.getElementById('firstCurrency');
const firstAmount = document.getElementById('first-amount');
const secondCurrency = document.getElementById('secondCurrency');
const secondAmount = document.getElementById('second-amount');
const rateEL = document.getElementById('rate');
const swap = document.getElementById('swap');


function calculate() {
    const currency_one = firstCurrency.value;
    const currency_two = secondCurrency.value;
    fetch(`https://api.exchangerate-api.com/v4/latest/${currency_one}`)
        .then(res =>res.json())
        .then(data => {
            const rate = data.rates[currency_two];
            rateEL.innerText = `1 ${currency_one} = ${rate} ${currency_two}`;
            secondAmount.value = (firstAmount.value * rate).toFixed(2);
        });
    
}
firstCurrency.addEventListener('change', calculate);
firstAmount.addEventListener('input', calculate);
secondCurrency.addEventListener('change', calculate);
secondAmount.addEventListener('input', calculate);
swap.addEventListener('click', ()=>{
    const tmp = firstCurrency.value;
    firstCurrency.value = secondCurrency.value;
    secondCurrency.value = tmp;
    calculate();
})

calculate();