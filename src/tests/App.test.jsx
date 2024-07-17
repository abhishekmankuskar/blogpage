import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import App from '../App';
import axios from 'axios';

jest.mock('axios');

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

test('renders the blog post list', async () => {
  render(
    <Router>
      <App />
    </Router>
  );

  const post1 = await screen.findByText('Post 1');
  expect(post1).toBeInTheDocument();
});
