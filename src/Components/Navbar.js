import {Link} from 'react-router-dom'
import { Navbar, Nav, Container } from "react-bootstrap";
import PersonIcon from "@material-ui/icons/Person";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import PhoneIcon from "@material-ui/icons/Phone";

export default function Navbars() {
  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="secondary" variant="dark">
        <Container>
          <Navbar.Brand ><Link to='/' style={{textDecoration:'none', color: 'white', fontSize:'3rem'}}>Restaurant Project </Link></Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav 
                style={{ marginLeft: "70%", color: "white" }}>
              {/* <Nav.Link style={{ color: "white" }} >
                <Link to='/Login'><PersonIcon /></Link>
              </Nav.Link> */}
              <Nav.Link style={{ color: "white" }} >
                <Link to='/SignUp'><button className='btn btn-primary'>Sign Up</button></Link>
              </Nav.Link>
              <Nav.Link style={{ color: "white" }} >
                <Link to='/Login'><button className='btn btn-info'>Login</button></Link>
              </Nav.Link>
              <Nav.Link href="/" style={{ color: "white" }}>
                <SearchIcon />
              </Nav.Link>
              <Nav.Link eventKey={2} href="/" style={{ color: "white" }}>
                <ShoppingBasketIcon />
              </Nav.Link>
              <Nav.Link eventKey={3} href="/" style={{ color: "white" }}>
                <PhoneIcon /> <a><b>0308-5715723</b></a>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
