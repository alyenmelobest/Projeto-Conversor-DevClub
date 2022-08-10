const button = document.getElementById("convert-button")
const select = document.getElementById("select-currency")

const dollar = 5.1
const euro = 5.2
const bitcoin = 121526.29

const convertValues = () => {
  const inputValue = document.getElementById("input-value").value
  const realValueText = document.getElementById("real-value-text")
  const currencyValueText = document.getElementById("currency-value-text")

  realValueText.innerHTML = new Intl.NumberFormat("pt-BR", {
    // NESSA ESTRUTURA, PEGAMOS DE UMA BIBLIOTECA DO JAVASCRIPT, QUE FORMATA PARA A MOEDA CORRENTE DO PAIS.
    style: "currency",
    currency: "BRL",
  }).format(inputValue)

  if (select.value === "US$ Dólar Americano") {
    currencyValueText.innerHTML = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(inputValue / dollar)
  }
  if (select.value === "€ Euro") {
    currencyValueText.innerHTML = new Intl.NumberFormat("de-DE", {
      style: "currency",
      currency: "EUR",
    }).format(inputValue / euro)
  }
  if( select.value === "Bitcoin") {
    currencyValueText.innerHTML = new Intl.NumberFormat("sv-ES", {
      style: "currency",
      currency: "BTC",
    }).format(inputValue / bitcoin)
  }
}

const selectChange = () => {
  const currencyName = document.getElementById("currency-text")
  const currencyImg = document.getElementById("currency-img")
  if (select.value === "US$ Dólar Americano") {
    currencyName.innerHTML = "Dólar Americano"
    currencyImg.src = "./assets/estados-unidos.png"
  }
  if (select.value === "€ Euro") {
    currencyName.innerHTML = "Euro"
    currencyImg.src = "./assets/euro.png"
  }
  if(select.value === "Bitcoin") {
    currencyName.innerHTML = "Bitcoin"
    currencyImg.src = "./assets/bitcoin.png"
  }

  convertValues()
}

button.addEventListener("click", convertValues)
select.addEventListener("change", selectChange)
