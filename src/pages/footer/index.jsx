import Logo from "../../assets/images/LOGO 2.png";
import appstoreBadge from "../../assets/images/app-store-badges-en 1.png";
import Instagram from "../../assets/images/Instagram.png";
import Facebook from "../../assets/images/Facebook.png";
import Snapchat from "../../assets/images/Snapchat.png";
import TikTok from "../../assets/images/TikTok.png";
import "./footer.css"

const Footer = () => {
  return (
    <>
      <div className="footer" >
        <div className="footer-left" style={{margin:'0px'}}>
          <div className="footer-logo">
            <img style={{width:"150px"}} src={Logo} />
          </div>
          <div className="app-buttons">
            <img
            style={{width:"270px"}}
              src={appstoreBadge}
              alt="Download on App Store and Google Play"
            />
          </div>
          <p style={{margin:"0.5rem",marginTop:"0px"}}>Company #490033-445, Registered with House of Companies.</p>
        </div>
        <div className="footer-middle" >
          <p style={{fontWeight:'bold'}}>Get Exclusive Deals in your Inbox</p>
          <div className="subscribe-form">
            <input
              type="email"
              placeholder="youremail@gmail.com"
              className="subscribe-input"
            />
            <button type="submit" className="subscribe-btn">
              Subscribe
            </button>
          </div>
          <p>we wont spam, read our <span style={{textDecoration:'underline'}}>email policy</span></p>
          <div className="icons">
            <img src={Facebook}></img>
            <img src={Instagram}></img>
            <img src={TikTok}></img>
            <img src={Snapchat}></img>
          </div>
        </div>
        <div className="footer-right" style={{margin:'0px'}}>
          <div className="left" style={{width:'50%'}}>
            <h4 style={{fontWeight:'900'}}>Legal Pages</h4>
            <p>Terms and conditions</p>
            <p>Privacy</p>
            <p>Cookies </p>
            <p>Modern Slavery Statement</p>
          </div>
          <div className="right" style={{width:'50%'}}>
            <h4>Important Links</h4>
            <p>Get help</p>
            <p>Add your restaurant</p>
            <p>Sign up to deliver </p>
            <p>Create a business account</p>
          </div>
        </div>
      </div>
      <div  className="bottom-container">
        <div className="left-bottom-container">
          <p>Order.uk Copyright 2024, All Rights Reserved.</p>
        </div>
        <div className="right-bottom-container">
          <p>Privacy Policy</p>
          <p>Terms</p>
          <p>Pricing</p>
          <p>Do not sell or share my personal information</p>
        </div>
    </div>
    </>
  );
};

export default Footer;
