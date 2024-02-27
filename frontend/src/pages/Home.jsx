import { Toastify } from "react-toastify";
import Header from "../Components/Header";
import Hero from "../Components/Hero";
import Generate from "../Components/Generate";
import Benefits from "../Components/Benefits";
import Footer from "../Components/Footer";


const Home = () => {
  return (
    <div className="body">
      <div className="container">
        <Toastify/>
        <Header />
        <Hero/>
        <Generate/>
        <Benefits/>
        <Footer/>
      </div>
    </div>
  )
}

export default Home