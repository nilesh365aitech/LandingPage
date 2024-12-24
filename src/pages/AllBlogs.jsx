import { useState, useEffect } from "react";
import axios from "axios";
import {
  Calendar,
  Eye,
  ChevronLeft,
  ChevronRight,
  Clock,
  TrendingUp,
  Search,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const AllBlogs = () => {
  const navigate = useNavigate();
  const [blogs, setBlogs] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchFocused, setSearchFocused] = useState(false);

  const fetchBlogs = async (page) => {
    try {
      setLoading(true);
      const response = await axios.get(
        `http://localhost:7009/api/blogs/getAllBlogs?page=${page}`
      );
      setBlogs(response.data.posts);
      setCurrentPage(response.data.currentPage);
      setTotalPages(response.data.totalPages);
    } catch (err) {
      setError("Failed to fetch blogs");
      console.error("Error fetching blogs:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBlogs(currentPage);
  }, [currentPage]);

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const getRecentBlogs = () => {
    return [...blogs]
      .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
      .slice(0, 3);
  };

  const getPopularBlogs = () => {
    return [...blogs].sort((a, b) => b.totalViews - a.totalViews).slice(0, 3);
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-gray-50">
        <div className="text-blue-600 text-xl font-medium">
          Loading amazing content...
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-gray-50">
        <div className="text-red-600 text-xl font-medium">{error}</div>
      </div>
    );
  }

  const handleReadMore = (blog) => {
    // Create URL-friendly title
    const urlTitle = blog.title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)/g, "");
    navigate(`/blog/${urlTitle}?id=${blog._id}`);
  };

  const handleBlogClick = (blog) => {
    handleReadMore(blog);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-blue-900">
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/30 to-purple-600/30 backdrop-blur-lg"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <h1 className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-200 via-purple-200 to-blue-200 mb-6 animate-gradient">
            Explore Our Universe of Ideas
          </h1>
          <p className="text-2xl text-blue-100 mb-12">
            Where thoughts transform into inspiration
          </p>

          <div
            className={`relative max-w-2xl transition-all duration-300 ${
              searchFocused ? "scale-105" : ""
            }`}
          >
            <input
              type="text"
              placeholder="Search articles..."
              className="w-full px-6 py-4 bg-white/10 backdrop-blur-md rounded-full text-white placeholder-blue-200 outline-none border-2 border-transparent focus:border-blue-400 transition-all"
              onFocus={() => setSearchFocused(true)}
              onBlur={() => setSearchFocused(false)}
            />
            <Search className="absolute right-6 top-1/2 transform -translate-y-1/2 text-blue-200" />
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-8">
            <div className="space-y-12">
              {blogs.map((blog) => (
                <article
                  onClick={() => handleBlogClick(blog)}
                  key={blog._id}
                  className="group relative bg-white/10 backdrop-blur-lg rounded-2xl overflow-hidden transform transition-all duration-500 hover:scale-[1.02] hover:bg-white/20"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <div className="relative p-8">
                    <div className="flex items-center space-x-4 mb-6">
                      <span className="px-4 py-2 rounded-full text-sm font-medium bg-gradient-to-r from-blue-500 to-purple-500 text-white">
                        {blog.category}
                      </span>
                      <span className="flex items-center text-blue-200 text-sm">
                        <Calendar className="w-4 h-4 mr-2" />
                        {formatDate(blog.createdAt)}
                      </span>
                      <span className="flex items-center text-blue-200 text-sm">
                        <Eye className="w-4 h-4 mr-2" />
                        {blog.totalViews} views
                      </span>
                    </div>

                    <h2 className="text-3xl font-bold text-white mb-4 group-hover:text-blue-300 transition-colors">
                      {blog.title}
                    </h2>

                    <p className="text-blue-100 mb-6 line-clamp-3">
                      {blog.content}
                    </p>

                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleReadMore(blog);
                      }}
                      className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full text-white font-medium transition-transform hover:scale-105"
                    >
                      Read More
                      <svg
                        className="w-4 h-4 ml-2 animate-bounce-x"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </button>
                  </div>
                </article>
              ))}
            </div>
            <div className="flex justify-center items-center space-x-6 mt-12">
              <button
                onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                disabled={currentPage === 1}
                className="flex items-center px-6 py-3 text-sm font-medium text-white bg-gradient-to-r from-blue-500 to-purple-500 rounded-full hover:scale-105 transition-transform disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <ChevronLeft className="w-5 h-5 mr-1" />
                Previous
              </button>
              <span className="text-white font-medium">
                Page {currentPage} of {totalPages}
              </span>
              <button
                onClick={() =>
                  setCurrentPage((prev) => Math.min(prev + 1, totalPages))
                }
                disabled={currentPage === totalPages}
                className="flex items-center px-6 py-3 text-sm font-medium text-white bg-gradient-to-r from-blue-500 to-purple-500 rounded-full hover:scale-105 transition-transform disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Next
                <ChevronRight className="w-5 h-5 ml-1" />
              </button>
            </div>
          </div>
          <aside className="lg:col-span-4 space-y-8">
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8">
              <div className="flex items-center space-x-3 mb-8">
                <Clock className="w-6 h-6 text-blue-300" />
                <h2 className="text-2xl font-bold text-white">Recent Posts</h2>
              </div>
              <div className="space-y-6">
                {getRecentBlogs().map((blog) => (
                  <div
                    key={blog._id}
                    className="group cursor-pointer"
                    onClick={() => handleBlogClick(blog)}
                  >
                    <h3 className="text-blue-100 font-medium group-hover:text-blue-300 transition-colors">
                      {blog.title}
                    </h3>
                    <p className="text-sm text-blue-200/70 mt-2">
                      {formatDate(blog.createdAt)}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8">
              <div className="flex items-center space-x-3 mb-8">
                <TrendingUp className="w-6 h-6 text-blue-300" />
                <h2 className="text-2xl font-bold text-white">Trending Now</h2>
              </div>
              <div className="space-y-6">
                {getPopularBlogs().map((blog, index) => (
                  <div
                    key={blog._id}
                    className="group cursor-pointer"
                    onClick={() => handleBlogClick(blog)}
                  >
                    <div className="flex items-start space-x-4">
                      <span className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                        {index + 1}
                      </span>
                      <div>
                        <h3 className="text-blue-100 font-medium group-hover:text-blue-300 transition-colors">
                          {blog.title}
                        </h3>
                        <p className="text-sm text-blue-200/70 mt-2">
                          {blog.totalViews} views
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white mb-8">Categories</h2>
              <div className="space-y-4">
                {["AI", "Technology", "Innovation"].map((category) => (
                  <div
                    key={category}
                    className="group cursor-pointer bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-xl p-4 hover:from-blue-500/30 hover:to-purple-500/30 transition-all"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-blue-100 group-hover:text-white transition-colors">
                        {category}
                      </span>
                      <span className="px-3 py-1 rounded-full text-sm font-medium bg-gradient-to-r from-blue-500 to-purple-500 text-white">
                        {
                          blogs.filter((blog) => blog.category === category)
                            .length
                        }
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
};

export default AllBlogs;
