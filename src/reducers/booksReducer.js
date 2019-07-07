import { RECEIVE_BOOKS, ADD_BOOK, EDIT_BOOK } from "../actions/books";

export default function books(state = {}, action) {
  switch (action.type) {
    case RECEIVE_BOOKS:
      return {
        ...state,
        ...action.books
      };

    case ADD_BOOK:
      const { book } = action;
      return {
        ...state,
        [action.book.id]: action.book
      };

    case EDIT_BOOK:
        return {
          ...state,
          [action.data.id]: action.data
        };  

    default:
      return state;
  }
}
