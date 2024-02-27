import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Header from "../Components/Header";
import Hero from "../Components/Hero";
import Generate from "../Components/Generate";
import Benefits from "../Components/Benefits";
import Footer from "../Components/Footer";

const Home = () => {
  return (
    <div className="body">
      <div className="container">
        <ToastContainer 
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
        />
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