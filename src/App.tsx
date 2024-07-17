import "./App.css";
import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import BlogPostList from "./components/BlogPostList";
import BlogPostItem from "./components/BlogPostItem";

function App() {
  const [posts, setPosts] = useState([]);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<BlogPostList setPosts={setPosts} />} />
        <Route path="/post/:id" element={<BlogPostItem posts={posts} />} />
      </Routes>
    </Router>
  );
}

export default App;
