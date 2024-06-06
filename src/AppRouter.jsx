import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import BookShelf from "./pages/BookShelf";
import Home from "./pages/Home";

function AppRouter() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/book-shelf" element={<BookShelf />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
}

export default AppRouter;
