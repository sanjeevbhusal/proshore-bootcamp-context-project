import { createContext, useState, useCallback } from "react";
import axios from "axios";


let BooksContext = createContext();

function Provider({ children }) {
    const [books, setBooks] = useState([]);

    const fetchBooks = useCallback(async () => {
        const response = await axios.get("http://localhost:3001/books")
        const book_list = response.data;
        setBooks(book_list);
    } , []);
   
    async function createBook(title) {
        try {
            const response = await axios.post("http://localhost:3001/books", {
                title
            })
    
            const new_book = response.data;
            setBooks([...books, new_book]);
        }
        catch(e) {
            console.log("Something went wrong! Please try again later!", e)
        }
    }

    async function deleteBookById(id) {
        try {
            await axios.delete(`http://localhost:3001/books/${id}`);
    
            const updatedBooks = books.filter(book => book.id !== id);
            setBooks(updatedBooks);
        }
        catch(e) {
            console.log("Something went wrong! Please try again later!", e)
        }        
    }


    async function updateBookById(id, newTitle) {
        try {
            const response = await axios.put(`http://localhost:3001/books/${id}`, {
                title: newTitle
            })
            const updatedProperties = response.data;
    
            const updatedBooks = books.map(book => {
                if (book.id === id) {
                    return {...book, ...updatedProperties };
                }
                return book;
            });
    
            setBooks(updatedBooks);
        } 
        catch(e) {
            console.log("Something went wrong! Please try again later!", e)
        }        
    }


    const valuesToShare = {
        books,
        fetchBooks,
        createBook,
        deleteBookById,
        updateBookById
    }

    return (
        <BooksContext.Provider value={valuesToShare}>
            {children}
        </BooksContext.Provider>
    )
}


export default BooksContext;
export { Provider };
