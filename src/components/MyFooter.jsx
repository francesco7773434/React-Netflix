import { Container, Row, Col, Button } from "react-bootstrap";

const MyFooter = () => {
  return (
    <footer>
      <Container>
        <Row className="justify-content-center mt-5">
          <Col xs={6}>
            <Row>
              <Col className="mb-2">
                <i className="bi bi-facebook footer-icon me-2 text-white"></i>
                <i className="bi bi-instagram footer-icon me-2 text-white"></i>
                <i className="bi bi-twitter-x footer-icon me-2 text-white"></i>
                <i className="bi bi-youtube footer-icon text-white"></i>
              </Col>
            </Row>
            <Row className="row-cols-1 row-cols-sm-2 row-cols-md-4 row-cols-lg-4">
              <Col className="footer-links">
                <p>
                  <a className="text-decoration-none text-white" href="#">
                    Audio and Subtitles
                  </a>
                </p>
                <p>
                  <a className="text-decoration-none text-white" href="#">
                    Media Center
                  </a>
                </p>
                <p>
                  <a className="text-decoration-none text-white" href="#">
                    Privacy
                  </a>
                </p>
                <p>
                  <a className="text-decoration-none text-white" href="#">
                    Contact us
                  </a>
                </p>
              </Col>
              <Col className="footer-links">
                <p>
                  <a className="text-decoration-none text-white" href="#">
                    Audio Description
                  </a>
                </p>
                <p>
                  <a className="text-decoration-none text-white" href="#">
                    Investor Relations
                  </a>
                </p>
                <p>
                  <a className="text-decoration-none text-white" href="#">
                    Legal Notices
                  </a>
                </p>
              </Col>
              <Col className="footer-links">
                <p>
                  <a className="text-decoration-none text-white" href="#">
                    Help Center
                  </a>
                </p>
                <p>
                  <a className="text-decoration-none text-white" href="#">
                    Jobs
                  </a>
                </p>
                <p>
                  <a className="text-decoration-none text-white" href="#">
                    Cookie Preferences
                  </a>
                </p>
              </Col>
              <Col className="footer-links">
                <p>
                  <a className="text-decoration-none text-white" href="#">
                    Gift Cards
                  </a>
                </p>
                <p>
                  <a className="text-decoration-none text-white" href="#">
                    Terms of Use
                  </a>
                </p>
                <p>
                  <a className="text-decoration-none text-white" href="#">
                    Corporate Information
                  </a>
                </p>
              </Col>
            </Row>
            <Row>
              <Col className="mb-2">
                <Button variant="dark" size="sm" className="footer-button rounded-0 mt-3">
                  Service Code
                </Button>
              </Col>
            </Row>
            <Row>
              <Col className="mb-2 mt-2 copyright">© 1997-2023 Netflix, Inc.</Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default MyFooter;
