// Task 2
// This is the api you will need to get data from: https://dummyjson.com/products

// The task is to fetch data on page load and show the data on the page in cards that you make.
// The cards need to have at least 4 properties about product

const fetchQuote = async () => {
  try {
    const response = await fetch(" https://dummyjson.com/products")
    const data = await response.json()
    return data.results
  } catch (error) {
    console.log(error)
  }
}
// fetchQuote()
// console.log(data.results)
fetchQuote().then((data) => {
  const contentDiv = document.getElementsByClassId("Prikazi")
  contentDiv.innerHTML = `
    <p class="Product">Ime: <span id="KupovinaText">${data.title}</span></p>
    <p class="Product">Cena: <span id="KupovinaText">${data.price}</span></p>
    <p class="Product">Rating: <span id="KupovinaText">${data.rating}</span></p>
    <p class="Product">Score: <span id="KupovinaText">${data.stock}</span></p>`
})
