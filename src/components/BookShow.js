import "./BookShow.css";
import { useState } from "react";

import useBooksContext from "../hooks/useBooksContext";
import BookEdit from "./BookEdit";

function BookShow({ book }) {
    const [showEdit, setShowEdit] = useState(false);
    const { deleteBookById } = useBooksContext();

    function handleEditClick() {
        setShowEdit(!showEdit);
    }

    function handleDeleteClick() {
        deleteBookById(book.id);
    }

    function handleSubmit() {
        setShowEdit(false);
    }

    let content = <p className="title">{book.title ? book.title : "random book"}</p>
    if (showEdit) {
        content = <BookEdit book={book} onSubmit={handleSubmit} />
    }

    return (
        <div className="book-show">
            <div className="buttons">
                <svg className="button-edit" onClick={handleEditClick}  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" >
                    <path d="M17 3a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h10zm-1.414 4.586a2 2 0 0 1 0 2.828l-5 5a2 2 0 0 1-2.828 0l-1.172-1.172a2 2 0 0 1 0-2.828l5-5a2 2 0 0 1 2.828 0l1.172 1.172z"/>
                </svg>
                <svg className="button-delete" onClick={handleDeleteClick} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" >
                    <path d="M18 6L6 18M6 6l12 12"/>
                </svg>
            </div>
            <img className="book-image" alt="book" src={`https://picsum.photos/seed/${book.id}/300/200`} />
            {content}
        </div>
    )
}

export default BookShow;