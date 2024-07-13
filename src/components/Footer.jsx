import "../styles/Footer.css"
import { Link } from "react-router-dom"
export default function Footer(){
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="contact-details">
                    <h3>Contact Us</h3>
                    <p>Phone: (123) 456-7890</p>
                    <p>Email: info@example.com</p>
                    <p>Address: 123 Main St, Anytown, USA</p>
                </div>
                <div className="quick-links">
                    <h3>Quick Links</h3>
                    <div>
                        <Link to="/privacy-policy">Privacy Policy</Link>
                        <Link to="/terms-of-service">Terms of Service</Link>
                    </div>
                </div>
                <div className="social-media">
                    <h3>Follow Us</h3>
                    <div>
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
                        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                    </div>
                </div>
            </div>
        </footer>
    )
}