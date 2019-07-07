import React, { Component } from "react";
import Book from "./Book";

class EditBook extends Component {
    state = {
        text: this.props.bookInfo.text,
        bookname: this.props.bookInfo.bookname,
        bookcount: this.props.bookInfo.bookcount,
        bookauthor: this.props.bookInfo.bookauthor,
        id: this.props.bookInfo.id,
        editIndicator: this.props.editIndicator,
        editedvalue: ''
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

     handleEdit = () => {
         this.setState(() => ({
             text: this.props.bookInfo.text,
             bookname: this.props.bookInfo.bookname,
             bookcount: this.props.bookInfo.bookcount,
             bookauthor: this.props.bookInfo.bookauthor,
             id: this.props.bookInfo.id,
             editedvalue: '',
             editIndicator: false
         }))
     }

     handleSave = () => {
        this.setState(() => ({
            editIndicator: false,
            editedvalue: 'edited'
        }))
     }

      render() {
        const { text,
        bookname,
        bookcount,
        bookauthor } = this.state;
        const charactersLeft = 180 - text.length;
        return (
            this.state.editIndicator ? (
            <form className="new-book edit-book">
              <input
              value={bookname}
              onChange={this.handleChangeBookName}
              />
              <br/>
              <textarea
                value={text}
                onChange={this.handleChangeBookDesc}
                className="textarea edit-textarea"
                maxLength={180}
              />
              {text !== "" && (
                <div className="tweet-length">
                  {charactersLeft} {" charachters left"}
                </div>
              )}
              <br/>
              <input type="number" min={0} max={100}
              value={bookcount}
              onChange={this.handleChangeBookCount}
              />
              <br/>
              <input
              value={bookauthor}
              onChange={this.handleChangeBookAuthor}
              />
              <br/>
              <div>
              <button className="btn cancel_btn" onClick={this.handleEdit}>
                Cancel
              </button>
              <button className="btn save_btn" onClick={this.handleSave}>
                SAVE
              </button>
             </div>
          </form>
          ) : <Book id={this.state.id} updatedData={this.state} bookedited = {this.state.editedvalue}/>
        );
      }
    }

export default EditBook;
