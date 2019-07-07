let books = {
  t1: {
    id: "t1",
    bookname: "You Are Born to Blossom",
    text: "This transformation would require elevating the standards of supremacy and thereby preserving the sanctity of public institutions. The book uses the simile of a tree to define the process of knowledge abiding fruits of affluence in the modern globalised world.",
    bookcount: 10,
    bookauthor: "author 1",
    timestamp: 1518043995650
  },
  t2: {
    id: "t2",
    bookname: "Across the Seven Seas",
    text: "A lot has been written about people who came to India at various times in history, but not enough about those who went from here to strange and surprising foreign lands.",
    bookcount: 11,
    bookauthor: "author 2",
    timestamp: 1518122597860
  }
};

export function _getBooks() {
  return new Promise((res, rej) => {
    setTimeout(() => res({ ...books }), 1000);
  });
}

function generateUID() {
  return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)
}

function formatBook({ text, bookname, bookcount, bookauthor }) {
  return {
    id: generateUID(),
    text,
    bookname,
    bookcount,
    bookauthor,
    timestamp: Date.now()
  }
}

export function _saveBook({ text, bookname, bookcount, bookauthor, author }) {
  return new Promise((res, rej) => {
    const formattedBook = formatBook({
      text,
      bookname,
      bookcount,
      bookauthor,
      author
    })

    setTimeout(() => {
      books = {
        ...books,
        [formattedBook.id]: formattedBook,
      }

      res(formattedBook)
    }, 1000)
  })
}
