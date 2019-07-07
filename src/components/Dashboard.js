import React, { Component } from "react";
import { connect } from "react-redux";
import Book from "./Book";
import FilteredBook from './filteredBook';

class Dashboard extends Component {
  state = {
    search: '',
    searchevalue: false,
    filteredData: null
  }

  handleSearchBookName = e => {
    const Searchbookname = e.target.value;
    this.setState(() => ({
      search: Searchbookname
    }));
  };
  searchHandler = () => {
    let allbooks = this.props.books;
    let books = [];
    Object.keys(allbooks).map(function (key, index) {
      const eachbook = allbooks[key]
      books.push(eachbook);
    });
    let filtervalue = books.filter(book => {
      return book.bookname.toLowerCase() === this.state.search.toLowerCase()
    })
    this.setState({
      searchevalue: true,
      filteredData: filtervalue,
      search: ''
    })
  }

  allBooksHandler = () => {
    this.setState({
      searchevalue: false
    })
  }

  render() {
    return (
      <div className="books-list">
        <div className="book-head"><h3 className="heading">Book Library System</h3></div>
        <div className="search-bar"><div className="search"><input onChange={this.handleSearchBookName} 
        className="search" 
        type="text"
        value={this.state.search} />
        {this.state.search ? <button onClick={this.searchHandler}>Search</button> : <button>Search</button>}</div>
        <button className="all-books" onClick={this.allBooksHandler}>All books</button></div>
        
        {!this.state.searchevalue ? (<ol className="dashbord-list">
          {this.props.booksIds.map(id => (
            <li key={id}>
              <Book id={id} />
            </li>
          ))}
        </ol>) : <FilteredBook filteredbookvalue={this.state.filteredData} />}
      </div>
    );
  }
}
function mapStateToProps({ booksReducer }) {
  return {
    booksIds: Object.keys(booksReducer).sort(
      //sorting from the newest to the oldest book
      //If compareFunction(a, b) is greater than 0, sort b to an index lower than a, i.e. b comes first.
      (a, b) => booksReducer[b].timestamp - booksReducer[a].timestamp
    ),
    books: booksReducer
  };
}

export default connect(mapStateToProps)(Dashboard);
