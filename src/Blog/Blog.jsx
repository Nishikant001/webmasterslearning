import React from "react";

const blogs = [
  {
    id: 1,
    title: "The Future of Web Development",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
    description: "Explore the latest trends in web development and what the future holds.",
    date: "January 25, 2024",
  },
  {
    id: 2,
    title: "Top JavaScript Frameworks to Learn",
    image: "https://images.unsplash.com/photo-1519999482648-25049ddd37b1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDJ8fGphdmFzY3JpcHQlMjBmcmFtZXdvcmtzfGVufDB8fHx8MTY5Mjk1Njg2NA&ixlib=rb-1.2.1&q=80&w=400",
    description: "A comprehensive guide to the best JavaScript frameworks for 2024.",
    date: "February 10, 2024",
  },
  {
    id: 3,
    title: "Why You Should Learn React in 2024",
    image: "https://images.unsplash.com/photo-1542831371-d531d36971e6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDR8fHJlYWN0JTIwY29kZXxlbnwwfHx8fDE2OTI5NTY4OTQ&ixlib=rb-1.2.1&q=80&w=400",
    description: "React is still one of the most popular frameworks. Learn why you should consider it.",
    date: "March 1, 2024",
  },
  {
    id: 4,
    title: "Mastering CSS Animations for the Modern Web",
    image: "https://images.unsplash.com/photo-1557683316-973673baf926?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
    description: "Learn how to create stunning CSS animations that elevate user experiences.",
    date: "March 15, 2024",
  },
  {
    id: 5,
    title: "The Complete MERN Stack Guide",
    image: "https://images.unsplash.com/photo-1556761175-4b46a572b786?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
    description: "Master MongoDB, Express, React, and Node.js to build full-stack web apps.",
    date: "April 5, 2024",
  },
  {
    id: 6,
    title: "Designing for the Future: UI/UX Trends",
    image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
    description: "Stay ahead with the latest UI/UX design trends that will shape the future of web design.",
    date: "April 20, 2024",
  },
];

const BlogSection = () => {
  return (
    <section className="bg-gray-100 py-12">
      <div className="container mx-auto px-4 mt-20 mb-6">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
          Latest Blog Posts
        </h2>

        {/* Responsive grid layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog) => (
            <div
              key={blog.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-500 hover:scale-105"
            >
              {/* Blog Image */}
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
              />

              {/* Blog Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {blog.title}
                </h3>
                <p className="text-gray-600 mb-4">{blog.description}</p>

                {/* Blog Date */}
                <div className="text-gray-500 text-sm mb-4">
                  <i className="far fa-calendar-alt mr-2"></i>{blog.date}
                </div>

                {/* Read More Button */}
                <a
                  href="#"
                  className="text-indigo-600 font-semibold hover:text-indigo-800 transition"
                >
                  Read More →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
