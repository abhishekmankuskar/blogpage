import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import BlogPostList from '../components/BlogPostList';
import axios from 'axios';

jest.mock('axios');

describe('BlogPostList', () => {
  const setPostsMock = jest.fn();

  beforeEach(() => {
    axios.get.mockResolvedValue({
      data: {
        articles: [
          {
            title: 'Post 1',
            description: 'Description for post 1',
            urlToImage: 'image1.jpg',
          },
          {
            title: 'Post 2',
            description: 'Description for post 2',
            urlToImage: 'image2.jpg',
          },
        ],
        totalResults: 40,
      },
    });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  test('renders list of posts', async () => {
    render(
      <Router>
        <BlogPostList setPosts={setPostsMock} />
      </Router>
    );

    const post1 = await screen.findByText('Post 1');
    const post2 = await screen.findByText('Post 2');
    expect(post1).toBeInTheDocument();
    expect(post2).toBeInTheDocument();
  });

  test('renders pagination', async () => {
    render(
      <Router>
        <BlogPostList setPosts={setPostsMock} />
      </Router>
    );

    const pagination = await screen.findByRole('navigation');
    expect(pagination).toBeInTheDocument();
  });
});
