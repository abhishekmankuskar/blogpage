import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Container, Typography, Button } from '@mui/material';

const BlogPostItem = ({ posts }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const post = posts[id];

  return (
    <Container>
      <Typography variant="h4" gutterBottom>{post.title}</Typography>
      <Typography variant="body1" gutterBottom>{post.content}</Typography>
      <img src={post.urlToImage} alt={post.title} style={{ width: '100%', height: 'auto' }} />
      <Button variant="contained" color="primary" onClick={() => navigate(-1)}>Back</Button>
    </Container>
  );
};

export default BlogPostItem;
