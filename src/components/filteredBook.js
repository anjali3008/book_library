import React, { Component } from 'react';

class filteredBook extends Component {
    render() {
        const book = this.props.filteredbookvalue;
        return (
            (book !== undefined && book !== null && book.length > 0) ?
                (<div className="dashbord-list">
                    <li>
                        <div className="book-info">
                            <div className="book">
                                <div className="title">{book[0].bookname}</div>
                                <div className="desc"><span>Description: </span> {book[0].text}</div>
                            </div>
                            <div className="book-footer">
                                <div className="count"><span>Books Count: </span> {book[0].bookcount}</div>
                                <div className="author"><span>Author: </span> {book[0].bookauthor}</div>
                            </div>
                        </div>
                    </li>
                </div>) : <div className="not-found">"Book not found"</div>
        );
    }
}

export default filteredBook;