import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function MyFooter() {
    return (
        <footer>
          <Container>
            <Row>
                <div style={{display:'flex', justifyContent: 'center'}}>
                    <i className='bi bi-facebook'></i>
                    <i className='bi bi-instagram'></i>
                    <i className='bi bi-twitter-x'></i>
                    <i className='bi bi-youtube'></i>
                </div>

              <Col style={{display:'flex', justifyContent: 'center'}}>
                
                  <ul className="list-unstyled">
                    <li>Audio and Subtitles</li>
                    <li>Media Center</li>
                    <li>Privacy</li>
                    <li>Contact us</li>
                  </ul>
                
              
                
                  <ul className="list-unstyled">
                    <li>Audio Description</li>
                    <li>Investor Relations</li>
                    <li>Legal Notices</li>
                  </ul>
                
                
                  <ul className="list-unstyled">
                    <li>Help Center</li>
                    <li>Jobs</li>
                    <li>Cookie Preferences</li>
                  </ul>
                
                
                  <ul className="list-unstyled">
                    <li>Gift Cards</li>
                    <li>Terms of Use</li>
                    <li>Corporate Information</li>
                  </ul>
              </Col>
                
              
            </Row>
          </Container>
          <div className="text-center">
            <p>&copy; 1997-2023 Netflix, Inc.</p>
          </div>
        </footer>
      );
}

export default MyFooter;