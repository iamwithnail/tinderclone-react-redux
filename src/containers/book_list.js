/**
 * Created by chris on 06/03/2017.
 */

import React, {Component } from 'react';
import { connect } from 'react-redux';
//container is a regular react component that gets bonded to the application state, and we connect the two.
//whever container data changes, will re-render.


class BookList extends Component {
    renderList() {
        return this.props.books.map((book) => {
            return (
                <li key={book.title} className="list-group-item"> {book.title}</li>
            );
        });
    }

    render() {
        return (
            <ul className="list-group col-sm-4">
            {this.renderList()}
        </ul>
        )
    }
}

function mapStateToProps(state) {
    //Whatever is returned shows up as props inside of BookList
  return {  books: state.books };
}

//this connects up the global redux state
export default connect(mapStateToProps)(BookList);