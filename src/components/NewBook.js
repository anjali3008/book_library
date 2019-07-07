import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { handleAddBook } from "../actions/books";
import { connect } from "react-redux";

class NewBook extends Component {
  state = {
    text: "",
    bookname: "",
    bookcount: "",
    bookauthor: "",
    toHome: false
  };
  handleChangeBookName = e => {
    const bookname = e.target.value;
    this.setState(() => ({
      bookname
    }));
  };
  handleChangeBookDesc = e => {
    const text = e.target.value;
    this.setState(() => ({
      text
    }));
  };
  handleChangeBookCount = e => {
    const bookcount = e.target.value;
    this.setState(() => ({
      bookcount
    }));
  };
  handleChangeBookAuthor = e => {
    const bookauthor = e.target.value;
    this.setState(() => ({
      bookauthor
    }));
  };
  handleSubmit = e => {
    e.preventDefault();
    const { text, bookname, bookcount, bookauthor } = this.state;
    const { dispatch } = this.props;
    dispatch(handleAddBook(text, bookname, bookcount, bookauthor));
    this.setState(() => ({
      text: "",
      bookname: "",
      bookcount: "",
      bookauthor: "",
      toHome: true
    }));
  };
  render() {
    const { text,
      bookname,
      bookcount,
      bookauthor,
      toHome } = this.state;
    const bookLeft = 180 - text.length;
    const currentUser = this.props.user;
    if (toHome === true) {
      return <Redirect to="/" />;
    }
    return (
      <div className="add-book">
        <div className="book-head">
          <h3 className="heading">{"Hey " + currentUser + "! You can Add Book here"}</h3></div>
        <form className="new-book" onSubmit={this.handleSubmit}>
          <input
            placeholder={"Enter Book name"}
            value={bookname}
            onChange={this.handleChangeBookName}
          />
          
          <br />
          <input type="number" min={0} max={100}
            placeholder={"Enter Book Count"}
            value={bookcount}
            onChange={this.handleChangeBookCount}
          />
          <br />
          <input
            placeholder={"Enter Author name"}
            value={bookauthor}
            onChange={this.handleChangeBookAuthor}
          />
          <br />
          <br />
          <textarea
            placeholder={"Add book description here (maximum 180 characters...) "}
            value={text}
            onChange={this.handleChangeBookDesc}
            className="textarea"
            maxLength={180}
          />
          {text !== "" && (
            <div className="book-length">
              {bookLeft} {" charachters left"}
            </div>
          )}
          <br/>
          <div className="save-btn"><button className="btn" type="submit" disabled={text === ""}>
            SAVE
          </button></div>
        </form>
      </div>
    );
  }
}

function mapStateToProps({ authedUser }) {
  return {
    user: authedUser
  };
}

export default connect(mapStateToProps)(NewBook);
