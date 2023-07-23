import React from "react";
import { useParams, useNavigate } from "react-router-dom";

const BlogPageDetail = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  return (
    <div>
      BlogPageDetail
      <button
        onClick={() => navigate("/blog")}
        className="p-4 bg-blue-500 rounded-sm"
      >
        BlogPageDetail
      </button>
      ;
    </div>
  );
};

export default BlogPageDetail;
