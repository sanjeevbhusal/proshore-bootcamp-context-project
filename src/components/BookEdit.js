import "./BookEdit.css";
import { useState } from "react";
import useBooksContext from "../hooks/useBooksContext";

function BookEdit({ book, onSubmit}) {
    const [updatedTitle, setUpdatedTitle] = useState(book.title)
    const { updateBookById } = useBooksContext();

    function handleChange(event) {
        const value = event.target.value;
        setUpdatedTitle(value);
    }

    function handleFormSubmit(event) {
        event.preventDefault();
        updateBookById(book.id, updatedTitle);
        onSubmit();
    }
    
    return (
        <form className="book-edit" onSubmit={handleFormSubmit}>
            <input className="input" placeholder="Enter Title" value={updatedTitle} onChange={handleChange} />
            <button className="save">Save</button>
        </form>
    )
}

export default BookEdit;