import { Col, Container, Navbar, Row } from "react-bootstrap";
import logo from "../assets/logo.png";

const MyProfile = () => {
  return (
    <Container>
      <Navbar expand="lg" bg="dark" variant="dark" style={{ backgroundColor: "#221f1f" }}>
        <Navbar.Brand href="#">
          <img src={logo} alt="Logo" style={{ width: 100, height: 60 }} />
        </Navbar.Brand>
      </Navbar>
      <Container>
        <h1 className="text-white">Edit Profile</h1>
        <hr className="my-4 text-white" />
        <Row>
          <Col size={2}>
            <img className="imgfluid w-50" src="https://wallpapers.com/images/hd/netflix-profile-pictures-5yup5hd2i60x7ew3.jpg" alt="Avatar" />
          </Col>
          <Col size={8}>
            <h5 className="bg-secondary text-white p-2 mb-3">Strive Student</h5>
            <p className="grey text-white">Language:</p>
            <div className="dropdown">
              <button className="btn bg-black bord text-white dropdown-toggle" type="button" data-bs-toggle="dropdown">
                English
              </button>
              <ul className="dropdown-menu bg-dark">
                <li>
                  <button className="dropdown-item text-white">Italian</button>
                </li>
                <li>
                  <button className="dropdown-item text-white">Portuguese</button>
                </li>
                <li>
                  <button className="dropdown-item text-white">Spanish</button>
                </li>
              </ul>
            </div>
            <hr className="my-4 text-white" />
            <p className=" text-white">Maturity Settings:</p>
            <p className="bg-secondary p-2 text-white">ALL MATURITY RATINGS</p>
            <p className="text-white"> Show titles of all maturity ratings for this profile</p>
            <button type="button" className="btn  bg-black text-white bord">
              EDIT
            </button>
            <hr className="my-4 text-white" />
            <p className="text-white">Autoplay Controls</p>
            <div>
              <input type="checkbox" id="autoplayNext" className="me-2" defaultChecked />
              <label htmlFor="autoplayNext" className="text-white">
                Autoplay next episode in a series on all devices
              </label>
            </div>
            <div>
              <input type="checkbox" id="autoplayPreviews" className="me-2" defaultChecked />
              <label htmlFor="autoplayPreviews" className="text-white">
                Autoplay previews while browsing on all devices
              </label>
            </div>
          </Col>
        </Row>
        <hr className="my-4 grey" />
      </Container>
    </Container>
  );
};

export default MyProfile;
