console.log("GLOBAL this:", this);

let title = "Global Title";

const book = {
  title: "JavaScript Deep Dive",

  lexicalShow: () => {
    console.log("Lexical this:", this.title);
  }
};

book.lexicalShow();  // Arrow was created in global context → prints "Global Title"
