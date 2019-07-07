import React, { Component } from "react";
import { connect } from "react-redux";
import EditBook from './EditBook';
import { editbook } from "../actions/books";

class Book extends Component {
  state = {
    editable : false
  }

  editHandler = () => {
    this.setState({
      editable: true
    })
  }

  render() {
    let book= this.props.book;
    if(this.props.bookedited === "edited"){
      this.props.dispatch(editbook(this.props.updatedData));
    }
    
    if (book === null) {
      return <p>This book doesn't exist</p>;
    }
    return (
      !this.state.editable ? ( <div className="book-info">
        <div className="book">
          <div className="title">{book.bookname}</div>
          <div className="desc"><span>Description: </span> {book.text}</div>
        </div>
        <div className="book-footer">
            <div className="count"><span>Books Count: </span> {book.bookcount}</div>
            <div className="author"><span>Author: </span> {book.bookauthor}</div>
            <div className="center-btn"><button className="btn edit-btn" onClick={this.editHandler}>Edit</button></div>
          </div>
      </div> ) : <EditBook bookInfo={this.props.book} editIndicator ={this.state.editable}/>
    );
  }
}
function mapStateToProps({ authedUser, booksReducer }, { id }) {
  const book_a = booksReducer[id];

  return {
    name: authedUser,
    book: book_a
  };
}

export default connect(mapStateToProps)(Book);
