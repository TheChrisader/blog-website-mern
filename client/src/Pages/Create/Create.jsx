import React from "react";

import "./Create.css";

const Create = () => {
  return (
    <div className="write">
      <img
        className="write-img"
        src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
        alt=""
      />
      <form className="write-form">
        <div className="write-form-group">
          <label htmlFor="fileInput">
            <i className="write-icon fa-solid fa-plus"></i>
          </label>
          <input id="fileInput" type="file" style={{ display: "none" }} />
          <input
            className="write-input"
            placeholder="Title"
            type="text"
            autoFocus={true}
          />
        </div>
        <div className="write-form-group">
          <textarea
            className="write-input write-text"
            placeholder="Tell your story..."
            type="text"
            autoFocus={true}
          />
        </div>
        <button className="write-submit" type="submit">
          Publish
        </button>
      </form>
    </div>
  );
};

export default Create;
