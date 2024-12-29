import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="d-flex justify-content-center align-items-center min-vh-100">
      <div className="card col-6 p-4">
        <div className="card-body">
          <h3 className="card-title text-center mb-4">Login to Your Account</h3>
          <form>
            {/* Username */}
            <div className="form-floating mb-3">
              <input
                type="text"
                className="form-control p-3 bg-secondary-subtle text-dark border-3 border-secondary rounded-5"
                id="username"
                placeholder="Username"
              />
              <label htmlFor="username">
                <i className="fas fa-user"></i> Username
              </label>
            </div>

            {/* Password */}
            <div className="form-floating mb-3">
              <input
                type="password"
                className="form-control p-3 bg-secondary-subtle text-dark border-3 border-secondary rounded-5"
                id="password"
                placeholder="Password"
              />
              <label htmlFor="password">
                <i className="fas fa-lock"></i> Password
              </label>
            </div>

            {/* Login Button */}
            <div className="d-grid gap-2 mb-3">
              <button type="submit" className="btn btn-primary rounded-5 p-3">
                Login
              </button>
            </div>

            {/* Register Link */}
            <div className="text-center">
              <p className="mb-0">
                Not Registered?{" "}
                <Link to="/register" className="text-decoration-none">
                  Register Instead
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
