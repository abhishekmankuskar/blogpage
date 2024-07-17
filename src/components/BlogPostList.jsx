import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Container, List, ListItem, ListItemText, Pagination } from '@mui/material';

const BlogPostList = ({ setPosts }) => {
  const [posts, setLocalPosts] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await axios.get(`https://newsapi.org/v2/everything?q=technology&apiKey=5c7f4067d4b84fe2841262994818f04c&page=${page}`);
      setLocalPosts(response.data.articles);
      setPosts(response.data.articles);
      setTotalPages(Math.ceil(response.data.totalResults / 20));
    };
    fetchPosts();
  }, [page, setPosts]);

  const handlePageChange = (event, value) => {
    setPage(value);
  };

  return (
    <Container>
        <h1>Here the Blogs below</h1>
      <List>
        {posts.map((post, index) => (
          <ListItem key={index} component={Link} to={`/post/${index}`}>
            <ListItemText primary={post.title} secondary={post.description} />
          </ListItem>
        ))}
      </List>
      <Pagination count={totalPages} page={page} onChange={handlePageChange} />
    </Container>
  );
};

export default BlogPostList;
