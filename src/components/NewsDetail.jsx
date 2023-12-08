import React from 'react';
import { useParams } from 'react-router-dom';

// Import or provide the newsData array here
const newsData = [
  {
    id: 1,
    heading: 'Breaking News 1',
    content: 'This is the content of breaking news 1.',
    image: 'https://example.com/news1.jpg',
  },
  {
    id: 2,
    heading: 'Latest News 2',
    content: 'This is the content of latest news 2.',
    image: 'https://example.com/news2.jpg',
  },
  // Add more news articles as needed
];

const NewsDetail = () => {
  const { id } = useParams();
  const selectedNews = newsData.find((news) => news.id === parseInt(id));

  if (!selectedNews) {
    return <div>News not found</div>;
  }

  return (
    <div>
      <h2>{selectedNews.heading}</h2>
      <img src={selectedNews.image} alt={selectedNews.heading} />
      <p>{selectedNews.content}</p>
      ssss
    </div>
  );
};

export default NewsDetail;