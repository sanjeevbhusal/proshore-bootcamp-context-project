import { useEffect } from "react";

import useBooksContext from "./hooks/useBooksContext";

import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";

import "./App.css";


function App() {
    const { fetchBooks } = useBooksContext();

    useEffect(() => {
        fetchBooks()
    }, [fetchBooks]);

    return (
    <div className="app">
        <BookCreate />
        <h1>Reading List</h1>
        <BookList />
    </div>
    )
}

export default App;