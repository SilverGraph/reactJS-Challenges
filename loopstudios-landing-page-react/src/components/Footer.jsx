import React from "react"

export default function Footer() {
    return (
        <div className="footer">

            <div id="footer-main">
                <img src="../../images/logo.svg" alt="" />
                <div className="menu-items">
                    <ul>
                        <li><a href="/">About</a></li>
                        <li><a href="/">Careers</a></li>
                        <li><a href="/">Events</a></li>
                        <li><a href="/">Products</a></li>
                        <li><a href="/">Support</a></li>
                    </ul>
                </div>
            </div>

            <div id="social-main">
                <div className="social-icons">
                    <p><img src="../../images/icon-instagram.svg" alt="" /></p>
                    <p><img src="../../images/icon-pinterest.svg" alt="" /></p>
                    <p><img src="../../images/icon-twitter.svg" alt="" /></p>
                    <p><img src="../../images/icon-facebook.svg" alt="" /></p>
                </div>
                <p>
                © 2021 Loopstudios. All rights reserved.
                </p>
            </div>

        </div>
    )
}