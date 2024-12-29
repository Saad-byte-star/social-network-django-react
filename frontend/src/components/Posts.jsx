import { useState } from "react"

function Posts(){

    const [ posts , setPosts ] = useState([
        {
            title : "Full Game",
            content : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            user : "Saad",
            timestamp : Date.now().toLocaleString(),
            likes : 12
        },
        {
            title : "Patang Baazi",
            content : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            user : "Kala G",
            timestamp : Date.now().toLocaleString(),
            likes : 7
        },
        {
            title : "Ten Ten Kam hogya Aey",
            content : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            user : "Habshi Black",
            timestamp : Date.now().toLocaleString(),
            likes : 103
        },
        {
            title : "Raya G Chul So?",
            content : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            user : "Saad",
            timestamp : Date.now().toLocaleString(),
            likes : 12
        },
        {
            title : "Im a SaD BOIII",
            content : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            user : "Kala G",
            timestamp : Date.now().toLocaleString(),
            likes : 7
        },
        {
            title : "Dummy Post 3",
            content : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            user : "Habshi Black",
            timestamp : Date.now(). toLocaleString(),
            likes : 103
        },
        {
            title : "Full Game",
            content : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            user : "Saad",
            timestamp : Date.now().toLocaleString(),
            likes : 12
        },
        {
            title : "Dummy Post 2",
            content : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            user : "Kala G",
            timestamp : Date.now().toLocaleString(),
            likes : 7
        },
        {
            title : "Dummy Post 3",
            content : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            user : "Habshi Black",
            timestamp : Date.now().toLocaleString(),
            likes : 103
        }
    ])


  // State to track current page and posts per page
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 5;

  // Calculate the index of the first post and the last post for the current page
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;

  // Get the posts for the current page
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  // Pagination Logic: Move to the next page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="container mt-4">
      <h2 className="mb-4">Posts</h2>
      <div className="row">
        {currentPosts.map((post, index) => (
          <div className="col-md-6 col-lg-12     mb-4" key={index}>
            <div className="card bg-secondary-subtle text-dark border-dark rounded-2 shadow-sm">
              <div className="card-body">
                <h5 className="card-title">{post.title}</h5>
                <p className="card-text">{post.content}</p>
                <p className="text-muted mb-2">Posted by: {post.user}</p>
                <p className="text-muted">Timestamp: {post.timestamp}</p>
                <div className="d-flex align-items-center gap-3">
                  <button
                    type="button"
                    className="btn btn-light border-dark rounded-2 d-flex align-items-center gap-2"
                  >
                    <i className="fas fa-thumbs-up"></i> Like
                  </button>
                  <span className="fw-bold">{post.likes}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination Controls */}
      <div className="d-flex justify-content-center mt-4">
        <button
          className="btn btn-outline-dark mx-2"
          onClick={() => paginate(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        <button
          className="btn btn-outline-dark mx-2"
          onClick={() => paginate(currentPage + 1)}
          disabled={indexOfLastPost >= posts.length}
        >
          Next
        </button>
      </div>
    </div>
  );
};


export default Posts