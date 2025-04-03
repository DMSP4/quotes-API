class Quote {
  constructor(id, text, author) {
    this.id = id;
    this.text = text;
    this.author = author;
    this.isFavorited = false;
  }

  formatText(){
    return `${this.text}`;
  }

  formatAutor(){
    return `© ${this.author}`;
  }
 
}

export default Quote;