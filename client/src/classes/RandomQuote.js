import quotes from "../data/quotes.js";
import MathUtils from "../utils/MathUtils.js";
import Quote from "./Quote.js";

class RandomQuote {
  static getRandomeQuote() {
    const randomIndex = MathUtils.generateRandomInt(quotes.length);
    const { id, text, author } = quotes[randomIndex];
    return new Quote(id, text, author);
  }

  static async getRandomQuoteViaApi() {
    const url = "https://quoteslate.vercel.app/api/quotes/random";
    const options = { headers: { "Content-Type": "application/json" } };
    try {
      const response = await fetch(url, options);
      const { id, quote, author } = await response.json();
      return new Quote(id, quote, author); 
      } 
    catch (error) {
      console.error("Failed to fetch quote:", error);
      return null;
    }
  }
}

export default RandomQuote;
