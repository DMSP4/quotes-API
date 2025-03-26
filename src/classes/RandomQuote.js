import quotes from "../data/quotes.js";
import MathUtils from "../utils/MathUtils.js";
import Quote from "./Quote.js";

class RandomQuote {
  static getRandomeQuote() {
    const randomIndex = MathUtils.generateRandomInt(quotes.length);
    const { id, text, author } = quotes[randomIndex];
    return new Quote(id, text, author);
  }

  static getRandomQuoteViaApi() {
    const url = "https://quoteslate.vercel.app/api/quotes/random";
    const options = { headers: { "Content-Type": "application/json" } };
    return fetch(url, options)
      .then((response) => response.json())
      .then(({ id, quote, author }) => new Quote(id, quote, author))
      .catch((error) => console.error(error));
  }
}

export default RandomQuote;
