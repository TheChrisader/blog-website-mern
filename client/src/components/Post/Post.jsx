import { Link } from "react-router-dom";

import "./Post.css";

const Post = ({ post }) => {
  return (
    <div className="post">
      {post.photo && <img className="post-img" src={post.photo} alt="" />}
      <div className="post-info">
        <div className="post-cats">
          {post.categories.map((c) => (
            <span className="post-cat">
              <Link className="link" to={`/posts?cat=${c}`}>
                {c}
              </Link>
            </span>
          ))}
        </div>
        <span className="post-title">
          <Link className="link" to={`/post/${post._id}`}>
            {post.title}
          </Link>
        </span>
        <hr />
        <span className="post-date">
          {new Date(post.updatedAt).toDateString()}
        </span>
      </div>
      <p className="post-desc">{post.desc}</p>
    </div>
  );
};

export default Post;
