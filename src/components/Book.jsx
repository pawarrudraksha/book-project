import React from "react";
import styles from "../styles/book.module.css";

const Book = ({ book, isBookShelf }) => {
  const addToShelf = () => {
    const updatedBook = {
      title: book?.title,
      edition_count: book?.edition_count,
    };
    let bookshelf = JSON.parse(localStorage.getItem("bookshelf")) || [];
    bookshelf.push(updatedBook);
    console.log(bookshelf);
    localStorage.setItem("bookshelf", JSON.stringify(bookshelf));
  };
  return (
    <div className={styles.homeBookContainer}>
      <div className={styles.homeBookTitle}>
        <p>Book Title : </p>
        <p>{book?.title}</p>
      </div>
      <div className={styles.homeBookEdition}>
        <p>Edition Count : </p>
        <p>{book?.edition_count}</p>
      </div>
      {!isBookShelf && (
        <button className="btn" onClick={addToShelf}>
          Add to BookShelf
        </button>
      )}
    </div>
  );
};

export default Book;
