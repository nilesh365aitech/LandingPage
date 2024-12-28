import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import axios from "axios";
import { baseURL } from "../contstant/URLS";

const BlogDetail = () => {
  const [searchParams] = useSearchParams();
  const id = searchParams.get("id");
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBlogDetail = async () => {
      try {
        setLoading(true);
        // Adjust this endpoint to match your API
        const response = await axios.get(
          `${baseURL}/api/blogs/getBlogById?id=${id}`
        );
        setBlog(response.data);
      } catch (err) {
        setError("Failed to fetch blog details");
        console.error("Error fetching blog details:", err);
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchBlogDetail();
    }
  }, [id]);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-blue-900">
        <div className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400 animate-pulse">
          Loading blog...
        </div>
      </div>
    );
  }

  if (error || !blog) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-blue-900">
        <div className="text-white text-xl">{error || "Blog not found"}</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-blue-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <article className="bg-white/10 backdrop-blur-lg rounded-2xl overflow-hidden">
          <div className="p-8">
            <div className="mb-8">
              <span className="px-4 py-2 rounded-full text-sm font-medium bg-gradient-to-r from-blue-500 to-purple-500 text-white">
                {blog.category}
              </span>
            </div>

            <h1 className="text-4xl font-bold text-white mb-6">{blog.title}</h1>

            <div className="flex items-center space-x-4 mb-8 text-blue-200 text-sm">
              <span>
                Posted on {new Date(blog.createdAt).toLocaleDateString()}
              </span>
              <span>•</span>
              <span>{blog.totalViews} views</span>
            </div>

            <div className="prose prose-lg prose-invert">
              <p className="text-blue-100">{blog.content}</p>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
};

export default BlogDetail;
