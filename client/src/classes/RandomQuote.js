import quotes from "../data/quotes.js";
import MathUtils from "../utils/MathUtils.js";
import Quote from "./Quote.js";
// import config from "../../config.js";

let config;
try {
  config = await import("../../config.prod.js");
} catch (error) {
  config = await import("../../config.js");
}
class RandomQuote {
  static getRandomeQuote() {
    const randomIndex = MathUtils.generateRandomInt(quotes.length);
    const { id, text, author } = quotes[randomIndex];
    return new Quote(id, text, author);
  }

  static async getRandomQuoteViaPublicApi() {
    const url = config.PUBLIC_API_URL;
    const options = { headers: { "Content-Type": "application/json" } };
    try {
      const response = await fetch(url, options);
      const { id, quote, author } = await response.json();
      return new Quote(id, quote, author);
    } catch (error) {
      console.error("Failed to fetch quote:", error);
      // return null;
    }
  }

  static async getRandomQuoteViaOwnApi() {
    const url = `${config.API_URL}/quotes/random-single`;
    const options = { headers: { "Content-Type": "application/json" } };
    try {
      const response = await fetch(url, options);
      const quote = await response.json();
      const { id, text, author } = quote;
      return new Quote(id, text, author);
    } catch (error) {
      console.error("Failed to fetch quote:", error);
    }
  }
}

export default RandomQuote;
