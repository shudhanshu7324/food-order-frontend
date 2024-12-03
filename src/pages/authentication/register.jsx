import { useState } from "react";
import Logo from "../../assets/images/LOGO 1.png";
import Footer from "../footer";
import "./styles.css";
import { useNavigate } from "react-router-dom";
import { register } from "../../services";
import toast from "react-hot-toast";

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
  });

  const [loading,setLoading] = useState(false)

  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/login");
  };

  const handleChange = (event)=>{
    setFormData({
        ...formData,
        [event.target.name] : event.target.value
    });
}

const handleRegister = async (e) =>{
  e.preventDefault()
  try{
    setLoading(()=>true)
    const response = await register(formData)
    if (response && response.token) {
      toast.success(response.message || "Signup successful!"); // Success toast
      localStorage.setItem("token", response.token);
      localStorage.setItem("userId", response.id);
      navigate("/login"); // Redirect to homepage
    } else if (response && response.message) {
      // Handle cases where the backend returns a 400 response with a message
      toast.error(response.message || "Something went wrong."); // Error toast
    }
  } catch (error) {
    // Handle network or unexpected errors
    toast.error("An unexpected error occurred. Please try again.");
    console.error(error); // Log error for debugging
  } finally {
    setLoading(false); // Stop loading spinner
  }
  }


  return (
    <>
      <div className="container">
        <div className="left-container">
          <div className="form">
            <div className="logo">
              <img src={Logo} />
            </div>
            <h3 className="welcome-text">Welcome 👋</h3>
            <p className="sub-text">
              Today is a new day. It’s your day. You shape it. <br />
              Sign up to start ordering.
            </p>
            <form className="form" onSubmit={handleRegister}>
              <label>Name</label>
              <input
                type="String"
                value={formData.name}
                onChange={handleChange}
                placeholder="eg. John A"
                name="name"
              />
              <label>Phone Number</label>
              <input
                type="number"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Enter your 10 digit mobile number"
                name="phone"
              />
              <label>Email</label>
              <input
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Example@email.com"
                name="email"
              />

              <label>Password</label>
              <input
                type="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="At least 8 characters"
                name="password"
              />

              <button type="submit" className="register">{loading?"Loading":"Continue"}</button>
            </form>
            <p className="signup-text">
              Already have an account?{" "}
              <span
                onClick={handleClick}
                style={{ color: "#FC8A06", cursor: "pointer" }}
              >
                Sign in
              </span>
            </p>
          </div>
        </div>
        <div className="right-container">
          <img
            src="https://res.cloudinary.com/dft6bqu4v/image/upload/v1732214695/Art_q1je1k.png"
            alt="Art"
            style={{ width: "80%" }}
          />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Register;
