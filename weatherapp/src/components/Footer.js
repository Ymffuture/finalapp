import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaFacebookF, FaTwitter, FaLinkedinIn } from 'react-icons/fa';
import '../styles/components/Settings.scss';
const Footer = () => {
  return (
    <footer className="text-center py-4 footer">
      <Container>
        <Row>
          <Col>
            <p className="mb-0">&copy; {new Date().getFullYear()} <b>LearnIQ</b>. All Rights Reserved.</p>
           
            <p  className="mb-0 ">Email: <a href="https://www.facebook.com" className="text-m">
                info.learniq@gmail.com
              </a> | Phone: 0634414863</p>
            <div className="mt-2">
              <a href="https://www.facebook.com" className="text-white mx-2">
                <FaFacebookF className='iconz'/>
              </a>
              <a href="https://www.twitter.com" className="text-white mx-2">
                <FaTwitter className='iconz'/>
              </a>
              <a href="https://www.linkedin.com" className="text-white mx-2">
                <FaLinkedinIn className='iconz'/>
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
