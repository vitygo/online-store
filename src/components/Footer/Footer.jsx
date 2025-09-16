import './Footer.css'

import { FaInstagram, FaTwitter,FaFacebookF } from "react-icons/fa";


export default function Footer(){
    return(
        <footer className="footer">
            <div className="footer__main">

                <div className="main__info">
                    <p className='info__logo'>LOGO</p>
                    <p className="info__text">The advantage of hiring a workspace with us is that givees you comfortable service and all-around facilities.</p>
                </div>

                <div className="main__links">
                    <div className="links__link-list">
                        <p id='link-list__title'>Services</p>
                        <p>Email Marketing</p>
                        <p>Campaigns</p>
                        <p>Branding</p>
                    </div>
                    <div className="links__link-list">
                        <p id='link-list__title'>Furniture</p>
                        <p>Beds</p>
                        <p>Chair</p>
                        <p>All</p>
                    </div>
                    <div className="links__link-list">
                        <p id='link-list__title'>Follow Us</p>
                        <p className='link-list__social-link'><FaFacebookF color='black'/>Facebook</p>
                        <p className='link-list__social-link'><FaTwitter color='black'/>Twitter</p>
                        <p className='link-list__social-link'><FaInstagram color='black'/>Instagram</p>
                    </div>
                </div>

            </div>
            <div className="footer__terms">
                <p>Copyright © 2021</p>
                <div className="terms__links">
                    <p>Terms & Conditions</p> 
                    <p>Privacy Policy</p>
                </div>
            </div>

        </footer>
    )
}