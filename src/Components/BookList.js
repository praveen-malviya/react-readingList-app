import React, { Component } from "react";

class BookList extends Component {

    render() { 
        return ( 
            <div className="book-list">
                <ul>
                    <li>Inner Enginnering</li>
                    <li>Theory of Everything</li>
                    <li>Half-Girlfriend</li>
                </ul>
            </div>
         );
    }
}
 
export default BookList;