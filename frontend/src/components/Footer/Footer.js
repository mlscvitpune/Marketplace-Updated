import React from "react";
import "./Footer.css";
import logo from "../../assets/images/eco-logo.png";
import { useLocation } from "react-router-dom";
import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";
import { Link } from "react-router-dom";

const Footer = () => {
  const year = new Date().getFullYear();
  const location = useLocation();
  // if (location.pathname === '/home' || location.pathname === '/signup' || location.pathname === '/login')
  //   return null;
  return (
    <footer className='footer'>
      <Container>
        <Row>
          <Col lg='3'>
            <div className='logo'>
              <div>
                <h1 className='text-white'>Marketplace</h1>
              </div>
              <p className='footer__text mt-3'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. A, eos
                eveniet ex recusandae in adipisci consequuntur suscipit quisquam
                ad fuga, magni enim voluptatem modi magnam dolorem rem quae
                repellat numquam.
              </p>
            </div>
          </Col>
          <Col lg='5'></Col>
          {/* <Col lg='5'>
            <div className='footer__quick-links'>
              <h4 className='quick__links-title'>Useful Links</h4>
              <ListGroup>
                <ListGroupItem className='ps-0 border-0'>
                  <Link to='/shop'>Shop</Link>
                </ListGroupItem>
                <ListGroupItem className='ps-0 border-0'>
                  <Link to='/shop'>Cart</Link>
                </ListGroupItem>
                <ListGroupItem className='ps-0 border-0'>
                  <Link to='/shop'>Login</Link>
                </ListGroupItem>
                <ListGroupItem className='ps-0 border-0'>
                  <Link to='/shop'>Privacy Policy</Link>
                </ListGroupItem>
              </ListGroup>
            </div>
          </Col> */}

          <Col lg='4'>
            <div className='footer__quick-links'>
              <h4 className='quick__links-title'>Contact</h4>
              <ListGroup className='footer__contact'>
                <ListGroupItem className='ps-0 border-0 d-flex align-items-center gap-2'>
                  <span>
                    <i className='ri-map-pin-line'></i>
                  </span>
                  <p>
                    MLSC VIT Pune, Upper Market Road, Upper Indira Nagar,
                    Bibwewadi, Pune, Maharashtra - 411037
                  </p>
                </ListGroupItem>
                <ListGroupItem className='ps-0 border-0 d-flex align-items-center gap-2'>
                  <span>
                    <i className='ri-phone-line'></i>
                  </span>
                  <p>+6968676665</p>
                </ListGroupItem>
                <ListGroupItem className='ps-0 border-0 d-flex align-items-center gap-2'>
                  <span>
                    <i className='ri-mail-line'></i>
                  </span>
                  <p>mlscvitpune@vit.edu</p>
                </ListGroupItem>
              </ListGroup>
            </div>
          </Col>
          <Col lg='12'>
            <p className='footer__copyright'>
              Copyright {year} developed by MLSC VIT Pune. All rights reserved.
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
export default Footer;
