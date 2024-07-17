import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import BlogPostItem from '../components/BlogPostItem';

const mockPosts = [
  {
    title: 'Post 1',
    content: 'Full content for post 1',
    urlToImage: 'image1.jpg',
  },
  {
    title: 'Post 2',
    content: 'Full content for post 2',
    urlToImage: 'image2.jpg',
  },
];

describe('BlogPostItem', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  test('renders post details', () => {
    render(
      <Router>
        <BlogPostItem posts={mockPosts} />
      </Router>
    );

    const title = screen.getByText('Post 1');
    const content = screen.getByText('Full content for post 1');
    expect(title).toBeInTheDocument();
    expect(content).toBeInTheDocument();
  });
});
