import "./BookList.css";
import BookShow from "./BookShow";
import useBooksContext from "../hooks/useBooksContext";


function BookList() {
    const { books } = useBooksContext();

    const renderedBooks = books.map((book) => <BookShow key={book.id} book={book} />);
    
    return (
        <div className="book-list">
            {renderedBooks}
        </div>
    )
}

export default BookList;