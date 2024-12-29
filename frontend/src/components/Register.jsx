// import { Link } from "react-router-dom";

// function Register() {
//     return (
//         <div className="d-flex justify-content-center align-items-center min-vh-100">
//         <div className="card col-6 p-4">
//           <div className="card-body">
//             <h3 className="card-title text-center mb-4">Create an Account</h3>
//             <form>
//               {/* Full Name */}
//               <div className="form-floating mb-3">
//                 <input
//                   type="text"
//                   className="form-control p-3 bg-secondary-subtle text-dark border-3 border-secondary rounded-5"
//                   id="name"
//                   placeholder="Full Name"
//                 />
//                 <label htmlFor="name">
//                   <i className="fas fa-user"></i> Full Name
//                 </label>
//               </div>
  
//               {/* Email */}
//               <div className="form-floating mb-3">
//                 <input
//                   type="email"
//                   className="form-control p-3 bg-secondary-subtle text-dark border-3 border-secondary rounded-5"
//                   id="email"
//                   placeholder="Email Address"
//                 />
//                 <label htmlFor="email">
//                   <i className="fas fa-envelope"></i> Email Address
//                 </label>
//               </div>
  
//               {/* Password */}
//               <div className="form-floating mb-3">
//                 <input
//                   type="password"
//                   className="form-control p-3 bg-secondary-subtle text-dark border-3 border-secondary rounded-5"
//                   id="password"
//                   placeholder="Password"
//                 />
//                 <label htmlFor="password">
//                   <i className="fas fa-lock"></i> Password
//                 </label>
//               </div>
  
//               {/* Confirm Password */}
//               <div className="form-floating mb-3">
//                 <input
//                   type="password"
//                   className="form-control p-3 bg-secondary-subtle text-dark border-3 border-secondary rounded-5"
//                   id="confirmPassword"
//                   placeholder="Confirm Password"
//                 />
//                 <label htmlFor="confirmPassword">
//                   <i className="fas fa-lock"></i> Confirm Password
//                 </label>
//               </div>
  
//               {/* Register Button */}
//               <div className="d-grid gap-2 mb-3">
//                 <button
//                   type="submit"
//                   className="btn btn-primary rounded-5 p-3"
//                 >
//                   Register
//                 </button>
//               </div>
  
//               {/* Login Link */}
//               <div className="text-center">
//                 <p className="mb-0">
//                   Already Registered?{" "}
//                   <Link to="/login" className="text-decoration-none">
//                     Login Instead
//                   </Link>
//                 </p>
//               </div>
//             </form>
//           </div>
//         </div>
//       </div>
//     );
// }

// export default Register



import { useState } from "react";
import { Link } from "react-router-dom";

function Register() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [toastMessage, setToastMessage] = useState("");
  const [toastType, setToastType] = useState(""); // Success or error for toast styling

  // Function to handle form submission
  const handleRegister = async (e) => {
    e.preventDefault();

    // Send fetch request to backend
    const response = await fetch("http://127.0.0.1:8000/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        email,
        password,
        confirmation: confirmPassword,
      }),
    });

    const data = await response.json();

    if (response.ok) {
      // Success response
      setToastMessage(data.message || "Registration successful!");
      setToastType("success");
    } else {
      // Error response
      setToastMessage(data.message || "An error occurred!");
      setToastType("danger");
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center min-vh-100">
      <div className="card col-6 p-4">
        <div className="card-body">
          <h3 className="card-title text-center mb-4">Create an Account</h3>
          <form onSubmit={handleRegister}>
            {/* Full Name */}
            <div className="form-floating mb-3">
              <input
                type="text"
                required
                className="form-control p-3 bg-secondary-subtle text-dark border-3 border-secondary rounded-5"
                id="name"
                placeholder="Full Name"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              <label htmlFor="name">
                <i className="fas fa-user"></i> Full Name
              </label>
            </div>

            {/* Email */}
            <div className="form-floating mb-3">
              <input
                type="email"
                required
                className="form-control p-3 bg-secondary-subtle text-dark border-3 border-secondary rounded-5"
                id="email"
                placeholder="Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <label htmlFor="email">
                <i className="fas fa-envelope"></i> Email Address
              </label>
            </div>

            {/* Password */}
            <div className="form-floating mb-3">
              <input
                type="password"
                required
                className="form-control p-3 bg-secondary-subtle text-dark border-3 border-secondary rounded-5"
                id="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <label htmlFor="password">
                <i className="fas fa-lock"></i> Password
              </label>
            </div>

            {/* Confirm Password */}
            <div className="form-floating mb-3">
              <input
                type="password"
                required
                className="form-control p-3 bg-secondary-subtle text-dark border-3 border-secondary rounded-5"
                id="confirmPassword"
                placeholder="Confirm Password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
              <label htmlFor="confirmPassword">
                <i className="fas fa-lock"></i> Confirm Password
              </label>
            </div>

            {/* Register Button */}
            <div className="d-grid gap-2 mb-3">
              <button type="submit" className="btn btn-primary rounded-5 p-3">
                Register
              </button>
            </div>

            {/* Login Link */}
            <div className="text-center">
              <p className="mb-0">
                Already Registered?{" "}
                <Link to="/login" className="text-decoration-none">
                  Login Instead
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>

      <div
          className={`toast align-items-center text-bg-${toastType} position-fixed bottom-0 end-0 m-3`}
          style={{ zIndex: 20 }}
          role="alert"
          aria-live="assertive"
          aria-atomic="true"
        >
          <div className="toast-body">
            {toastMessage}
            adkjasdaskdjkas
            <button
              type="button"
              className="btn-close btn-close-white"
              data-bs-dismiss="toast"
              aria-label="Close"
            ></button>
          </div>
        </div>

      {/* Toast Notification */}
      {toastMessage && (
        <div
          className={`toast align-items-center text-bg-${toastType} position-fixed bottom-0 end-0 m-3`}
          style={{ zIndex: 1050 }}
          role="alert"
          aria-live="assertive"
          aria-atomic="true"
        >
          <div className="toast-body">
            {toastMessage}
            <button
              type="button"
              className="btn-close btn-close-white"
              data-bs-dismiss="toast"
              aria-label="Close"
            ></button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Register;
