import React from 'react';
import { Container, Nav, Navbar, NavDropdown, DropdownButton, Button, ButtonGroup, Dropdown, Form, FormControl } from 'react-bootstrap';

const AppNavbar = () => {

    return (
    <Navbar bg="light" expand="lg">
    <Container>
        <Navbar.Brand href="#home">Quizlet</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
            <Nav.Link href="#home">Textbook solutions</Nav.Link>
            <NavDropdown title="Your library" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
            </NavDropdown>
            <ButtonGroup>
                <DropdownButton as={ButtonGroup} title="Create" id="bg-vertical-dropdown-3">
                    <Dropdown.Item eventKey="1">Study sets</Dropdown.Item>
                    <Dropdown.Item eventKey="2">Folders</Dropdown.Item>
                </DropdownButton>
            </ButtonGroup>
            <Button variant="warning">Upgrade</Button>
        </Nav>
        <Form className="d-flex">
            <FormControl
            type="search"
            placeholder="Search"
            className="me-2"
            aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
        </Form>
        </Navbar.Collapse>
    </Container>
    </Navbar>
    );
};

export default AppNavbar;
