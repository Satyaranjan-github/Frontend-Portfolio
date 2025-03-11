import { CiFacebook, CiLinkedin } from "react-icons/ci";
import { FaDiscord, FaInstagram, FaMailBulk } from "react-icons/fa";

const Contact = () => {
  return (
    <>
     <div className="container contact " id='contact'>
       <h1 
        data-aos="fade-down-right"
        data-aos-offset="100">Contact Me</h1>
       <div className="contact-icon d-flex gap-5 justify-content-center"
       data-aos="zoom-in-up"
       data-aos-offset="100">
       <a href="https://instagram.com" className="items"> <FaInstagram />
        </a><a href="https://facebook.com" className="items"><CiFacebook />
          </a><a href="https://discord.com" className="items"><FaDiscord />
            </a><a href="https://linkedin.com" className="items"><CiLinkedin />
              </a><a href="https://mail.com" className="items"><FaMailBulk /></a>
       </div>
     </div>
    </>
  )
}

export default Contact
