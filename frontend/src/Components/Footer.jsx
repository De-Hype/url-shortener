
const Footer = () => {
  return (
   <footer className="footer">
    <div className="footer-wrapper">
        <h2 className="logo top">Bliink</h2>
        <div className="footer-links">
            <div className="">
                <h6>Company</h6>
                <ul>
                    <li>About</li>
                    <li>Product</li>
                    <li>Pricing</li>
                    <li>Careers <span>hiring</span></li>
                    <li>Contact Us</li>
                </ul>
            </div>
            <div className="top">
                <h6>Resources</h6>
                <ul>
                    <li>API Intergrations</li>
                    <li>Blog</li>
                    <li>Support</li>
                </ul>
            </div>
        </div>
    </div>
    <div className="footer-bottom">
        <h4>Built by David Hype <span>2024</span></h4>
    </div>
   </footer>
  )
}

export default Footer