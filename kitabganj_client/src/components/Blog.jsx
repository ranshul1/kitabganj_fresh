import React from 'react';
import { Link } from 'react-router-dom';

const blogs = [
  {
    id: 1,
    title: '10 Must-Read Classics Every Book Lover Should Own',
    excerpt: 'Explore the timeless classics that continue to inspire generations of readers.',
    image: 'https://images.unsplash.com/photo-1512820790803-83ca734da794',
    author: 'Jane Bookman',
    date: 'May 20, 2025',
  },
  {
    id: 2,
    title: 'How to Build a Reading Habit in the Digital Age',
    excerpt: 'Struggling to focus on books? These proven tips will help you cultivate a lasting reading habit.',
    image: 'https://images.unsplash.com/photo-1524985069026-dd778a71c7b4',
    author: 'Mark Litwell',
    date: 'May 12, 2025',
  },
  {
    id: 3,
    title: 'Top 5 Upcoming Book Releases in 2025',
    excerpt: 'Get ready for the most anticipated books launching this year across genres.',
    image: 'https://images.unsplash.com/photo-1528207776546-365bb710ee93',
    author: 'Elena Page',
    date: 'May 8, 2025',
  },
];

function Blog() {
  return (
    <div className="mt-20 px-6 lg:px-24">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-5xl font-bold text-gray-900 mb-4">From the BookShelf</h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Insights, reviews, and stories from our team and the world of books. Stay inspired, stay curious.
        </p>
      </div>

      {/* Blog Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {blogs.map((blog) => (
          <div
            key={blog.id}
            className="bg-white shadow-md rounded-2xl overflow-hidden transition hover:shadow-lg"
          >
            <img
              src={blog.image}
              alt={blog.title}
              className="w-full h-56 object-cover"
            />
            <div className="p-6">
              <h2 className="text-xl font-semibold mb-2 text-gray-800">{blog.title}</h2>
              <p className="text-gray-600 text-sm mb-4">{blog.excerpt}</p>
              <div className="flex justify-between items-center text-sm text-gray-500">
                <p>By {blog.author}</p>
                <p>{blog.date}</p>
              </div>
              <Link
                to={`/blog/${blog.id}`}
                className="inline-block mt-4 text-blue-700 font-semibold hover:underline"
              >
                Read More →
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Blog;
