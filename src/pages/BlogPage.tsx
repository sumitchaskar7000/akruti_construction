import React from 'react';
import { Link } from 'react-router-dom';
import { SectionContainer } from '../components/SectionContainer';

export const BlogPage: React.FC = () => {
  const blogPosts = [
    {
      id: '1',
      title: 'Top 10 Real Estate Investment Tips for 2025',
      excerpt: 'Discover the latest trends and strategies for successful real estate investment in the current market.',
      image: '/images/blog/tips.jpg',
      date: '2024-01-15',
      author: 'Rajesh Kumar',
    },
    {
      id: '2',
      title: 'Sustainable Living: The Future of Real Estate',
      excerpt: 'Learn how eco-friendly features and sustainable design are shaping the future of residential developments.',
      image: '/images/blog/green.jpg',
      date: '2024-01-10',
      author: 'Priya Sharma',
    },
    {
      id: '3',
      title: 'Understanding Home Loan Options',
      excerpt: 'A comprehensive guide to different home loan options and how to choose the right one for you.',
      image: '/images/blog/loan.jpg',
      date: '2024-01-05',
      author: 'Amit Patel',
    },
  ];

  return (
    <div>
      <div className="pt-20 md:pt-24 bg-brandDark text-white">
        <SectionContainer>
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Blog
            </h1>
            <p className="text-xl md:text-2xl text-gray-300">
              Insights, tips, and updates from the real estate world
            </p>
          </div>
        </SectionContainer>
      </div>

      <SectionContainer className="bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <article key={post.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow">
                <div className="relative h-48 bg-gray-200">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="p-6">
                  <div className="text-sm text-gray-500 mb-2">
                    {new Date(post.date).toLocaleDateString()} • {post.author}
                  </div>
                  <h2 className="text-xl font-bold text-gray-900 mb-3 hover:text-primary transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-gray-700 mb-4">{post.excerpt}</p>
                  <Link
                    to={`/blog/${post.id}`}
                    className="text-primary font-semibold hover:underline"
                  >
                    Read More →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </SectionContainer>
    </div>
  );
};


export default BlogPage;