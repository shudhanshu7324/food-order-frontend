import Header from "../header";
import Categories from "./categories";
import DealsSection from "./deals";
import Hero from "./hero";
import Footer from "../footer";
import "./home.css";
import Faq from "./faq";
import Data from "./data";
import Navbar from "../navbar";
import Restaurant from "./restaurants";
import Cards from "./card";
import DownloadBanner from "./DownloadBanner";

const Home = () => {
  
  return (
    <>
    <div className="home-page">
      <Navbar/>
      <Header />
      <Hero/>
      <DealsSection />
      <Categories/>
      <Restaurant title="Popular Restaurants"/>
      <DownloadBanner/>
      <Cards/>
      <Faq/>
      <Data/>
    </div>
    <Footer/>
    </>
  );
};

export default Home;
