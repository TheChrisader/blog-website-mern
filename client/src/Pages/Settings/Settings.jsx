import { useContext, useState } from "react";
import axios from "axios";

import Sidebar from "../../components/Sidebar/Sidebar";
import { Context } from "../../Context/Context";

import "./Settings.css";

export default function Settings() {
  const { user, dispatch } = useContext(Context);
  const [file, setFile] = useState(null);
  const [username, setUsername] = useState(user.username);
  const [email, setEmail] = useState(user.email);
  const [password, setPassword] = useState("");

  const tempSource = file && URL.createObjectURL(file);

  const PF = "http://localhost:8000/images/";

  const handleSubmit = async (e) => {
    dispatch({ type: "UPDATE_START" });
    e.preventDefault();
    const updatedUser = {
      userId: user._id,
      username,
      email,
      password,
    };
    console.log(updatedUser);
    try {
      if (file) {
        const data = new FormData();
        const filename = Date.now() + file.name;
        data.append("name", filename);
        data.append("file", file);
        updatedUser.profilePic = filename;

        try {
          await axios.post("/upload", data);
        } catch (err) {
          console.log(err);
        }
      }
      const res = await axios.put(`/users/${user._id}`, updatedUser);
      dispatch({ type: "UPDATE_SUCCESS", payload: res.data });
      console.log(user);
      window.location.reload();
    } catch (err) {
      dispatch({ type: "UPDATE_FAILURE" });
      console.log(err);
    }
  };

  const handleDelete = async () => {
    try {
      await axios.delete(`/users/${user._id}`, {
        data: {
          userId: user._id,
        },
      });
      dispatch({ type: "LOGOUT" });
      window.location.replace("/");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="settings">
      <div className="settings-wrapper">
        <div className="settings-title">
          <span className="settings-title-update">Update Your Account</span>
          <span className="settings-title-delete" onClick={handleDelete}>
            Delete Account
          </span>
        </div>
        <form className="settings-form" onSubmit={handleSubmit}>
          <label>Profile Picture</label>
          <div className="settings-pp">
            <img src={tempSource || PF + user.profilePic} alt="" />
            <label htmlFor="fileInput">
              <i className="settings-pp-icon fa-solid fa-circle-user"></i>
            </label>
            <input
              id="fileInput"
              type="file"
              style={{ display: "none" }}
              className="settings-pp-input"
              onChange={(e) => {
                setFile(e.target.files[0]);
              }}
            />
          </div>
          <label>Username</label>
          <input
            type="text"
            placeholder="Username"
            name="name"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <label>Email</label>
          <input
            type="email"
            placeholder="Email@gmail.com"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label>Password</label>
          <input
            type="password"
            placeholder="Password"
            name="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="settings-submit-button" type="submit">
            Update
          </button>
        </form>
      </div>
      <Sidebar />
    </div>
  );
}
