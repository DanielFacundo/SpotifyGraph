import {Navbar, Nav} from 'react-bootstrap' 

export default function Header() {
    return(
        <Navbar bg="dark" variant="dark" sticky="top" >
            <Navbar.Brand> Hello World</Navbar.Brand>
            <Nav>
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/">peepee poo poo</Nav.Link>
            </Nav>
        </Navbar>
    );
}

