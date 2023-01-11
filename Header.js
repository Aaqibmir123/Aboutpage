import HeaderCard from "../Cart/HeaderCard";
import { Navbar, Container, Nav } from "react-bootstrap";
import {Link} from "react-router-dom";
const Header = (props) => {
  return (
    <Navbar bg="dark" variant="dark">
      <Container className="">
        <Navbar.Brand>
          <Link to="/">Home</Link>
        </Navbar.Brand>
        <Nav>
          <Nav.Link>
            <Link to="/Story">Story</Link>
          </Nav.Link>
          <Nav.Link>
            <Link to="/About">About</Link>
          </Nav.Link>
        </Nav>
        <HeaderCard Toggle={props.Toggle} />
      </Container>
    </Navbar>
  );
};

export default Header;
