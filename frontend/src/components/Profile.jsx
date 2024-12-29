import { useState } from "react";
import { Link } from "react-router-dom";

function Profile() {
  const [user, setUser] = useState({
    username: "Beluga Cat",
    profilePic: "https://yt3.ggpht.com/iuMKrvsaCdBn2yF43L9Dmen0LSQHryoRT2b5EIpJz6au10HqrtBeRaGtIuMg0M8DN8GAHta49A=s900-c-k-c0x00ffffff-no-rj", // Replace with the actual profile picture URL
    bio: "Wassup Shawty 😏, Im Beluga! And all ya pussies better hide yo women , since im now in town😎",
    followers: 120,
    following: 80,
    posts: [
      {
        title: "Post 1",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        timestamp: Date.now().toLocaleString(),
        likes: 32
      },
      {
        title: "Post 2",
        content: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        timestamp: Date.now().toLocaleString(),
        likes: 45
      },
      {
        title: "Post 3",
        content: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
        timestamp: Date.now().toLocaleString(),
        likes: 12
      }
    ]
  });

  return (
    <div className="container py-5">
      {/* User Info */}
      <div className="d-flex justify-content-center align-items-center mb-4">
        <div className="text-center">
          <img
            src={user.profilePic}
            alt="Profile"
            className="rounded-circle mb-3"
            style={{ width: "150px", height: "150px", objectFit: "cover" }}
          />
          <h3>{user.username}</h3>
          <p className="text-muted">{user.bio}</p>
          <div className="d-flex justify-content-center mb-3">
            <div className="mx-3">
              <h5>{user.followers}</h5>
              <p className="text-muted">Followers</p>
            </div>
            <div className="mx-3">
              <h5>{user.following}</h5>
              <p className="text-muted">Following</p>
            </div>
          </div>
        </div>
      </div>

      {/* User Posts */}
      <div className="row">
        {user.posts.map((post, index) => (
          <div key={index} className="col-md-12 mb-4">
            <div className="card shadow-sm rounded-2">
              <div className="card-body">
                <h5 className="card-title">{post.title}</h5>
                <p className="card-text">{post.content}</p>
                <div className="d-flex justify-content-between align-items-center">
                  <span className="text-muted">{post.timestamp}</span>
                  <span>
                    <i className="fas fa-thumbs-up"></i> {post.likes}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Profile;
