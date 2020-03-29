import React from 'react';
import Billboard from './components/Billboard/Billboard';
import AboutUs from './components/AboutUs/AboutUs';
import HowWeWork from './components/HowWeWork/HowWeWork';
import OurBenefits from './components/OurBenefits/OurBenefits';
import ContactUs from './components/ContactUs/ContactUs';
import Footer from './components/Footer/Footer';
import {Navbar, Nav, Container, Button} from 'react-bootstrap';
import './App.scss';
import logo from './alfa-logo.svg';


function App() {
	return (
		<div className='App'>
			<Navbar bg='dark' variant='dark' expand='lg' fixed='top' className='main-nav'>
				<Container>
					<Navbar.Brand href='/'>
						<img src={logo} width='150px' alt='Alfa Logo'/>
					</Navbar.Brand>
					<Navbar.Toggle aria-controls='basic-navbar-nav'/>
					<Navbar.Collapse>
						<Nav>
							<Nav.Link href='/'>Home</Nav.Link>
							<Nav.Link>About us</Nav.Link>
							<Nav.Link>How we work</Nav.Link>
							<Nav.Link>Our products</Nav.Link>
							<Nav.Link>Our Benefits</Nav.Link>
							<Nav.Link>Contact us</Nav.Link>
						</Nav>
					</Navbar.Collapse>
					<Nav.Item>
						<Button size='sm'>Online bank</Button>
					</Nav.Item>
				</Container>
			</Navbar>
			<Billboard></Billboard>
			<AboutUs></AboutUs>
			<HowWeWork></HowWeWork>
			<OurBenefits></OurBenefits>
			<ContactUs></ContactUs>
			<Footer></Footer>
		</div>
	);
}

export default App;
