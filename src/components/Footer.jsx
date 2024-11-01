/*import { faDisplay } from "@fortawesome/free-solid-svg-icons";*/
import { useState } from 'react';
import './Footer.css';
import { FaEnvelope, FaFax, FaMapMarkerAlt, FaPhoneAlt } from 'react-icons/fa';

const paragraphStyles = {
  WebkitLineClamp: 2,
  WebkitBoxOrient: 'vertical',
  overflow: 'hidden',
  display: '-webkit-box',
};

const Footer = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div className="footer">
        <div className="container">
          <div className="footer_text">
            <h2 className="footer_text_traidr text-primary mb-3">Traidr</h2>

            <p
              className="footer_text_lorem mb-2"
              style={isOpen ? null : paragraphStyles}
            >
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis,
              consequuntur. Nisi, officiis! Fugit quos doloribus sint?
              Recusandae doloremque amet consectetur officiis eius nisi, dolores
              unde repellendus molestias...
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="footer_button"
              >
                {isOpen ? 'Read Less' : 'Read more'}
              </button>
            </p>
          </div>
          <div className="footer_contact grid-md mb-3 align">
            <div className="footer_contact_box tel flex align-center justify-start">
              <div className="footer_contact_box_teleph_logo mr-1">
                <p>
                  <FaPhoneAlt size={30} />
                </p>
              </div>
              <div className="footer_contact_box_teleph_no">
                <p>Tel</p>
                <p>310-437-2766</p>
              </div>
            </div>
            <div className="footer_contact_box mail flex align-center justify-start">
              <div className="footer_contact_box_mail_logo mr-1">
                <FaEnvelope size={30} />
              </div>
              <div className="footer_contact_box_mail_text">
                <p>Mail</p>
                <p>unreal@outlook.com</p>
              </div>
            </div>
            <div className="footer_contact_box address flex align-center justify-start">
              <div className="footer_contact_box_logo mr-1">
                <FaMapMarkerAlt size={30} />
              </div>
              <div className="footer_contact_box_text">
                <p>Address</p>
                <p>
                  706 Campfire Ave
                  <br />
                  Meridan, CT 06450
                </p>
              </div>
            </div>
            <div className="footer_contact_box fax flex align-center justify-start">
              <div className="footer_contact_box_text mr-1">
                <FaFax size={30} />
              </div>
              <div className="footer_contact_box_text">
                <p>Fax</p>
                <p>+1-000-0000</p>
              </div>
            </div>
          </div>
          <div className="footer_social pb-4 grid-sm">
            <div className="footer_about">
              <ul>
                <li>
                  <a href="" className="social_first">
                    About
                  </a>
                </li>
                <li>
                  <a href="">About</a>
                </li>
                <li>
                  <a href="">Blog</a>
                </li>
                <li>
                  <a href="">Careers</a>
                </li>
                <li>
                  <a href="">Jobs</a>
                </li>
                <li>
                  <a href="">In Press</a>
                </li>
              </ul>
            </div>
            <div className="footer_support">
              <ul>
                <li>
                  <a href="" className="social_first">
                    Support
                  </a>
                </li>
                <li>
                  <a href="">Contact Us</a>
                </li>
                <li>
                  <a href="">Online Chat</a>
                </li>
                <li>
                  <a href="">Whatsapp</a>
                </li>
                <li>
                  <a href="">Telegram</a>
                </li>
                <li>
                  <a href="">Ticketing</a>
                </li>
              </ul>
            </div>
            <div className="footer_FAQ">
              <ul>
                <li>
                  <a href="" className="social_first">
                    FAQ
                  </a>
                </li>
                <li>
                  <a href="">Account</a>
                </li>
                <li>
                  <a href="">Manage Deliveries</a>
                </li>
                <li>
                  <a href="">Orders</a>
                </li>
                <li>
                  <a href="">Payments</a>
                </li>
                <li>
                  <a href="">Returns</a>
                </li>
              </ul>
            </div>
            <div className="footer_aboutt">
              <ul>
                <li>
                  <a href="" className="social_first">
                    About
                  </a>
                </li>
                <li>
                  <a href="">About Us</a>
                </li>
                <li>
                  <a href="">Blog</a>
                </li>
                <li>
                  <a href="">Careers</a>
                </li>
                <li>
                  <a href="">Jobs</a>
                </li>
                <li>
                  <a href="">In Press</a>
                </li>
              </ul>
            </div>
            <div className="footer_supportt">
              <ul>
                <li>
                  <a href="" className="social_first">
                    Support
                  </a>
                </li>
                <li>
                  <a href="">Contact Us</a>
                </li>
                <li>
                  <a href="">Online Chat</a>
                </li>
                <li>
                  <a href="">Whatsapp</a>
                </li>
                <li>
                  <a href="">Telegram</a>
                </li>
                <li>
                  <a href="">Ticketing</a>
                </li>
              </ul>
            </div>
            <div className="footer_FAQq">
              <ul>
                <li>
                  <a href="" className="social_first">
                    FAQ
                  </a>
                </li>
                <li>
                  <a href="">Account</a>
                </li>
                <li>
                  <a href="">Manage Deliveries</a>
                </li>
                <li>
                  <a href="">Orders</a>
                </li>
                <li>
                  <a href="">Payments</a>
                </li>
                <li>
                  <a href="">Returns</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="footer_copyright_new align-center">
            <div className="termsOfUse">
              <ul className="termsOfUse_flex flex gap-40">
                <li>Privacy policy</li>
                <li>Site map</li>
                <li>Terms of use</li>
              </ul>
            </div>
            <div className="rightReseved ">
              <p>&copy; 2000-2024, All rights reserved.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
