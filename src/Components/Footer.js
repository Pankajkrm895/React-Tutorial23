import React, { Component } from "react";
import './Footer.css'

class Footer extends Component {
  render() {
    return (
      <footer>
        <hr />
        <h3> &copy;Developer Funnel</h3>

        <div className="footdiv">
          <ul>
            <li>About Us</li>
            <li>Contact Us</li>
          </ul>
        </div>
        <div className="footdiv">
          <ul>
            <li>About Us</li>
            <li>Contact Us</li>
          </ul>
        </div>
        <div className="footdiv noBorder">
          <ul>
            <li>About Us</li>
            <li>Contact Us</li>
          </ul>
        </div>
        <div className="socialfoot">
          <a href="/">
            <img
              src="https://i.ibb.co/TTp516h/facebook.png"
              alt="fb"
              className="socialIcon"
            />
          </a>
          <a href="/">
            <img
              src="https://i.ibb.co/w0kZ5Hf/insta.png"
              alt="fb"
              className="socialIcon"
            />
          </a>
          <a href="/">
            <img
              src="https://i.ibb.co/4jxsYSP/yt3.png"
              alt="fb"
              className="socialIcon"
            />
          </a>
        </div>
      </footer>
    );
  }
}

export default Footer;
