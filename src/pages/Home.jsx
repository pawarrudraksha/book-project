import React, { useEffect, useState } from "react";
import axios from "axios";
import styles from "../styles/home.module.css";
import { useNavigate } from "react-router-dom";
import Book from "../components/Book";

const Home = () => {
  const navigate = useNavigate();
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();
  const [searchTerm, setSearchTerm] = useState("the lord of rings");
  useEffect(() => {
    const fetchBooks = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          `https://openlibrary.org/search.json?q=${searchTerm}&page=1&limit=10`
        );
        setBooks(response?.data?.docs);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };
    fetchBooks();
  }, [searchTerm]);
  return (
    <div className={styles.homeWrapper}>
      <div className={styles.homeContainer}>
        <p className={styles.mobileHomeHeader}>Search by Book Name</p>
        <div className={styles.homeHeader}>
          <div></div>
          <div className={styles.homeSearchBook}>
            <p>Search by book name</p>
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search Books..."
            />
          </div>
          <button className="btn" onClick={() => navigate("/book-shelf")}>
            My Bookshelf
          </button>
        </div>
        {!loading && (
          <div className={styles.homeContent}>
            <div className={styles.homeBooksWrapper}>
              {books &&
                books?.length > 0 &&
                books.map((book, index) => (
                  <div className={styles.homeBookWrapper} key={index}>
                    <Book book={book} />
                  </div>
                ))}
            </div>
          </div>
        )}
        {!loading && books?.length === 0 && (
          <div className={styles.homeContent}>
            Your Searched Books appear here
          </div>
        )}
      </div>
      {loading && <p>Loading..</p>}
    </div>
  );
};

export default Home;
