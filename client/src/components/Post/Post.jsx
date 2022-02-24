import { Link } from "react-router-dom";

import "./Post.css";

const Post = ({ img }) => {
  return (
    <div className="post">
      <img className="post-img" src={img} alt="" />
      <div className="post-info">
        <div className="post-cats">
          <span className="post-cat">
            <Link className="link" to="/posts?cat=music">
              Music
            </Link>
          </span>
          <span className="post-cat">
            <Link className="link" to="/posts?cat=life">
              Life
            </Link>
          </span>
        </div>
        <span className="post-title">
          <Link className="link" to="/posts/abc">
            Lorem ipsum dolor sit amet
          </Link>
        </span>
        <hr />
        <span className="post-date">1 hour ago</span>
      </div>
      <p className="post-desc">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda
        officia architecto deserunt deleniti? Labore ipsum aspernatur magnam
        fugiat, reprehenderit praesentium blanditiis quos cupiditate ratione
        atque, exercitationem quibusdam, reiciendis odio laboriosam?
      </p>
    </div>
  );
};

export default Post;
