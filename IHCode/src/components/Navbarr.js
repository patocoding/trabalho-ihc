import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function Navbarr() {
  return (
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#">KamiKats NavBar</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1">Home</Nav.Link>
            <Nav.Link href="#action2">Fotos</Nav.Link>
            <NavDropdown title="Meus Gatos - DROPDOWN" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Cookie</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
               Zezé
              </NavDropdown.Item>
              <NavDropdown.Item href="#action5">
                Serafina
              </NavDropdown.Item>
            </NavDropdown>

          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Pesquise algo no site..."
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Pesquisar</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navbarr;