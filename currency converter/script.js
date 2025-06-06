   let api = `https://v6.exchangerate-api.com/v6/${apiKey}/latest/USD`;

const fromDropDown = document.getElementById
("from-currency-select");
const toDropDown = document.getElementById("to-currency-select");

//create dropdown from the currencies array
currencies.forEach((currency) => {
    const option = document.createElement("option");
    option.value = currency;
    option.text = currency;
    fromDropDown.add(option);
});   
//Repeat same thing for the other dropdown
currencies.forEach((currency) => {
    const option = document.createElement("option");
    option.value = currency;
    option.text = currency;
    toDropDown.add(option);
});   
//setting default values
fromDropDown.value = "USD";
toDropDown.value = "INR"

let convertCurrency = () => {
    //create references
    const amount = document.querySelector("#amount").value;
    const fromCurrency = fromDropDown.value;
    const toCurrency = toDropDown.value;

    //if amount input field is not empty
    if (amount.length != 0)  {
     fetch('https://v6.exchangerate-api.com/v6/ebe3433b39c03bd6b6e5d3de/latest/USD')
     .then((resp) => resp.json())
     .then(data => {
      let fromExchangeRate = data.conversion_rates [fromCurrency];
      let toExchangeRate = data.conversion_rates [toCurrency];
      const convertedAmount = (amount / fromExchangeRate) * toExchangeRate;
      result.innerHTML = `${amount} ${fromCurrency} = ${convertedAmount.toFixed(2)  } ${toCurrency}`
     });
     
   
    } else {
        alert("please fill in the amount");
    }
};

document
.querySelector("#convert-button")
.addEventListener("click",   convertCurrency);
window.addEventListener("load", convertCurrency);
