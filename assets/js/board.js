class Card {
  constructor(text) {
    this.text = text;
    this.id = ++Card.lastId;
  }
}

Card.lastId = 0;

class List {
  constructor(title) {
    this.title = title;
    this.id = ++List.lastId;
    this.cards = [];
  }

  addCard(text) {
    var card = new Card(text);
    this.cards.push(card);
  }
}

List.lastId = 0;

class Board {
  constructor() {
    this.id = ++Board.lastId;
    this.lists = [];    
  }

  addList(text) {
    var list = new List(text);
    this.lists.push(list);
  }
}

Board.lastId = 0;

var board = new Board();

