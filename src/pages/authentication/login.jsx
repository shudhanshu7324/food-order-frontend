import { useState } from "react";
import Logo from "../../assets/images/LOGO 1.png";
import Footer from "../footer";
import "./styles.css";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { login } from "../../services";

const Login = () => {
  const [formData, setFormData] = useState({
    email:null,
    password:null
  });

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const [loading, setLoading] = useState(false);
  const navigate = useNavigate()
  const handleClick = ()=>{
    navigate("/register")
  }

  const handleLogin = async (e) => {
    e.preventDefault();
  
    try {
      setLoading(true);
  
      // Make the API call
      const response = await login(formData);
  
      // Handle success response (status 200)
      if (response && response.token) {
        toast.success(response.message || "Login successful!"); // Success toast
        localStorage.setItem("token", response.token);
        localStorage.setItem("userId", response.id);
        localStorage.setItem("username", response.name);
        navigate("/"); // Redirect to homepage
      } else if (response && response.message) {
        // Handle cases where the backend returns a 400 response with a message
        toast.error(response.message || "Invalid credentials."); // Error toast
      }
    } catch (error) {
      // Handle network or unexpected errors
      toast.error("An unexpected error occurred. Please try again.");
      console.error(error); // Log error for debugging
    } finally {
      setLoading(false); // Stop loading spinner
    }
  };
  

  return (
    <>
      <div className="container">
        <div className="left-container">
          <div className="form">
            <div className="logo">
              <img src={Logo} />
            </div>
            <h3 className="welcome-text">Welcome Back👋</h3>
            <p className="sub-text">
              Today is a new day. It’s your day. You shape it. <br />
              Sign in to start ordering.
            </p>
            <form className="Loginform" onSubmit={handleLogin}>
              <label>Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Example@email.com"
              />

              <label>Password</label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="At least 8 characters"
              />

              <button type="submit" disabled={loading} className="Login">{loading?"Loading...":"Sign in"}</button>
            </form>
            <p className="signup-text">
            Don&apos;t you have an account?  <span onClick={handleClick} style={{color:'#FC8A06',cursor: 'pointer'}}>Sign up</span>
            </p>
          </div>
        </div>
        <div className="right-container">
          <img
            src="https://res.cloudinary.com/dft6bqu4v/image/upload/v1732214695/Art_q1je1k.png"
            alt="Art"
            style={{ width: "70%" }}
          />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Login;
