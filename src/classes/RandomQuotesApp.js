import Quote from "./Quote.js";
import RandomQuote from "./RandomQuote.js";

class RandomQuotesApp {
  constructor() {
    this.randomQuoteBtn = document.getElementById("random-quote-btn");
    this.randomQuoteApiBtn = document.getElementById("random-quote-api-btn");
    this.quoteTextElement = document.getElementById("quote-text");
    this.quoteAuthorElement = document.getElementById("quote-author");
    this.currentQuote = null;

    this.init();
  }

  displayCurrentQuote() {
    this.quoteTextElement.textContent = this.currentQuote.formatText();
    this.quoteAuthorElement.textContent = this.currentQuote.formatAutor();
  }

  changeCurrentQuote(newQuote) {
    if (newQuote instanceof Quote) {
      this.currentQuote = newQuote;
      this.displayCurrentQuote();
    }
  }

  randomQuoteHandler() {
    this.changeCurrentQuote(RandomQuote.getRandomeQuote());
  }

  async randomQuoteViaApiHandler() {
    this.changeCurrentQuote(await RandomQuote.getRandomQuoteViaApi());
  }

  init() {
    this.randomQuoteBtn.addEventListener("click", () => this.randomQuoteHandler());
    this.randomQuoteApiBtn.addEventListener("click", () =>
      this.randomQuoteViaApiHandler()
    );
  }
}

export default RandomQuotesApp;
