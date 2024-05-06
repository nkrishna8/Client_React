import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useSearchParams } from 'react-router-dom';
import { logoutActionCreator } from './reducres/userReducer';

function MyNavBar() {
  // const [searchData, setSearchData] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();


  const getSearchData = (e) => {
    // console.log(e);
    setSearchParams({ search: e.target.value });
    // console.log("+++++++",searchData);
  }

  const { username } = useSelector(state => state);
  const dispatch = useDispatch();


  return (
    <Navbar bg="black" variant='green' expand="sm" className="bg-body-tertiary mb-2">
      <Container fluid>
        <Navbar.Brand as={Link} to='/'>React</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto"

          >
            <Nav.Link as={Link} to='/'>Home </Nav.Link>
            <Nav.Link as={Link} to='comp'>Component</Nav.Link>
            <Nav.Link as={Link} to='fcusercomp'>FC_Users</Nav.Link>
            <Nav.Link as={Link} to='fsa'>FSA</Nav.Link>
            <Nav.Link as={Link} to='counter'>Counter</Nav.Link>
            <Nav.Link as={Link} to='post'>Post</Nav.Link>

          </Nav>
          <Nav>
            {username? <Nav.Link as={Button} onClick={()=>dispatch(logoutActionCreator())}>Logout </Nav.Link>:<>
            <Nav.Link as={Link} to='login'>Login </Nav.Link>
            <Nav.Link as={Link} to='signup'>SignUp</Nav.Link>
            </>}
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              onChange={e => getSearchData(e)}
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MyNavBar;