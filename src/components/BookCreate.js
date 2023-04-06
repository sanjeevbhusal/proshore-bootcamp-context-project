import "./BookCreate.css";
import { useState } from "react";
import useBooksContext from "../hooks/useBooksContext";

function BookCreate() {
    const [title, setTitle] = useState("");
    const { createBook } = useBooksContext();

    function handleInputChange(event) {
        const title = event.target.value;
        setTitle(title);
    }

    function handleFormSubmit(event) {
        event.preventDefault();
        createBook(title);
        setTitle("");
    }

    return (
        <div className="book-create-container">
            <h3>Add a Book</h3>
            <form onSubmit={handleFormSubmit}>
                <input placeholder="Enter the name of book to add" value={title} onChange={handleInputChange} />
                <button>Add Book</button>
            </form>
        </div>
    )
}

export default BookCreate;