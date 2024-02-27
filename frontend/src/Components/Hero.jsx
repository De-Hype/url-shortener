import Bliinks from "../assets/Bliinks_Two.svg";
const Hero = () => {
  return (
    <div className="hero">
        <aside className="hero-text-wrapper">
            <h3 className="hero-text">Generate short urls in seconds with <span className="hero-text-bold">Bliink</span></h3>
            <p>Amplify your brand's identity while gaining deep insights into link performance metrics</p>
            <button id="btn" type="button">Get Started</button>
        </aside>
        <aside className="image-container">
            <img src={Bliinks} alt="" className="hero-image" />
        </aside>
    </div>
  )
}

export default Hero;