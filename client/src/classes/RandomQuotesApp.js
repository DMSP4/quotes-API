import Quote from "./Quote.js";
import RandomQuote from "./RandomQuote.js";

class RandomQuotesApp {
  constructor() {
    this.randomQuoteBtn = document.getElementById("random-quote-btn");
    this.randomQuotePublicApiBtn = document.getElementById(
      "random-quote-public-api-btn"
    );
    this.randomQuoteOwnApiBtn = document.getElementById(
      "random-quote-own-api-btn"
    );
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

  // async handleRandomQuoteViaPublicApi() {
  //   this.changeCurrentQuote(await RandomQuote.getRandomQuoteViaPublicApi());
  // }

  // async handleRandomQuoteViaOwnApi() {
  //   this.changeCurrentQuote(await RandomQuote.getRandomQuoteViaOwnApi());
  // }

  async handleRandomQuoteViaApi(apiIsOwn = false) {
    this.changeCurrentQuote(
      apiIsOwn
        ? await RandomQuote.getRandomQuoteViaOwnApi()
        : await RandomQuote.getRandomQuoteViaPublicApi()
    );
  }

  init() {
    this.randomQuoteBtn.addEventListener("click", () =>
      this.randomQuoteHandler()
    );
    this.randomQuotePublicApiBtn.addEventListener("click", () =>
      this.handleRandomQuoteViaApi()
    );
    this.randomQuoteOwnApiBtn.addEventListener("click", () =>
      this.handleRandomQuoteViaApi(true)
    );
  }
}

export default RandomQuotesApp;
