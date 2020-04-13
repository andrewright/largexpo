import React from 'react';
import {Container, Nav, Navbar} from "react-bootstrap";
import logo from "../../logo.svg";
import {Link} from "react-router-dom";
/*
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faSignInAlt} from '@fortawesome/free-solid-svg-icons';
*/

export class Navigation extends React.Component {
	state = {
		isTop: true,
	};

	componentDidMount() {
		document.addEventListener('scroll', () => {
			const isTop = window.scrollY < 100;
			if (isTop !== this.state.isTop) {
				this.setState({isTop});
			}
		});
	}
	render() {
		return (
			<Navbar expand='md' fixed='top' variant='dark'
			        className={'main-nav ' + (!this.state.isTop ? 'scrolled' : '')}>
				<Container>
					<Navbar.Brand href='/'>
						<img src={logo} className='logo' alt='LARGEXPO'/>
					</Navbar.Brand>
					<Navbar.Toggle aria-controls='basic-navbar-nav'/>
					<Navbar.Collapse className='justify-content-end'>
						<Nav>
							<Link to='/' className='nav-link'>Home</Link>
							<Link to='/about-us' className='nav-link'>About US Page</Link>
							<Nav.Link href='#App'>Home</Nav.Link>
							<Nav.Link href='#AboutUs'>About us</Nav.Link>
							<Nav.Link href='#HowWeWork'>How we work</Nav.Link>
							<Nav.Link href='#OurBenefits'>Our products</Nav.Link>
							<Nav.Link href='#ContactUs'>Contact us</Nav.Link>
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		);
	}
}

export default Navigation;
