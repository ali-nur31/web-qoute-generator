const quoteEl = document.getElementById("quote");
const authorEl = document.getElementById("author");
const diceBtn = document.getElementById("diceBtn");

async function fetchQuote() {
  quoteEl.textContent = "Loading quote...";
  authorEl.textContent = "";

  try {
    const res = await fetch("https://dummyjson.com/quotes/random");
    if (!res.ok) {
      throw new Error("Network response was not ok");
    }

    const data = await res.json();
    quoteEl.textContent = data.quote;
    authorEl.textContent = data.author;
  } catch (error) {
    quoteEl.textContent = "Could not load quote. Please try again.";
    authorEl.textContent = "";
  }
}

fetchQuote();

diceBtn.addEventListener("click", fetchQuote);
