import { showLoading, hideLoading } from "react-redux-loading";
import { saveBook } from "../middleware/booksApi";

export const RECEIVE_BOOKS = "RECEIVE_BOOKS";
export const ADD_BOOK = "ADD_BOOK";
export const EDIT_BOOK = "EDIT_BOOK";

export function receiveBooks(books) {
    return {
      type: RECEIVE_BOOKS,
      books,
    };
  }

  function addBook(book) {
    return {
      type: ADD_BOOK,
      book
    };
  }

  export function editbook(data) {
    return {
      type: EDIT_BOOK,
      data
    };
  }

  export function handleAddBook(text, bookname, bookcount, bookauthor) {
    return (dispatch, getState) => {
      // const { authedUser } = getState();
      dispatch(showLoading());
      return saveBook({
        text,
        bookname,
        bookcount,
        bookauthor
        // author: authedUser
      })
        .then(book => dispatch(addBook(book)))
        .then(() => dispatch(hideLoading()));
    };
  }
