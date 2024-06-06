import React, { useEffect, useState } from "react";
import Book from "../components/Book";
import styles from "../styles/bookShelf.module.css";

const BookShelf = () => {
  const [bookShelf, setBookShelf] = useState([]);
  useEffect(() => {
    const response = JSON.parse(localStorage.getItem("bookshelf")) || [];
    setBookShelf(response);
  }, []);
  console.log(bookShelf);
  return (
    <div className={styles.bookShelfContainer}>
      <p className={styles.bookShelfHeader}>My Bookshelf</p>
      <div className={styles.bookShelfBooksWrapper}>
        <div className={styles.bookShelfBooks}>
          {bookShelf &&
            bookShelf?.length > 0 &&
            bookShelf.map((book, index) => (
              <div className={styles.bookShelfBookWrapper} key={index}>
                <Book book={book} isBookShelf />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default BookShelf;
