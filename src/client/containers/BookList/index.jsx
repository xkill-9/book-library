import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { selectBook } from 'actions';
import { bindActionCreators } from 'redux';

const propTypes = {
  books: PropTypes.array,
  selectBook: PropTypes.func,
};

class BookList extends Component {
  renderList() {
    return this.props.books.map(book => {
      return (
        <li
          onClick={() => this.props.selectBook(book)}
          key={book.title}
          className="list-group-item"
        >
          {book.title}
        </li>
      );
    });
  }

  render() {
    return (
      <ul className="list-group col-sm-4">
        {this.renderList()}
      </ul>
    );
  }
}

BookList.propTypes = propTypes;

function mapStateToProps(state) {
  return {
    books: state.books,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ selectBook }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(BookList);
