import React from 'react';
import Billboard from './components/Billboard/Billboard';
import AboutUs from './components/AboutUs/AboutUs';
import HowWeWork from './components/HowWeWork/HowWeWork';
import OurBenefits from './components/OurBenefits/OurBenefits';
import ContactUs from './components/ContactUs/ContactUs';
import Footer from './components/Footer/Footer';
import {Navbar, Nav, Container} from 'react-bootstrap';
import './App.scss';
import logo from './logo.svg';
/*
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faSignInAlt} from '@fortawesome/free-solid-svg-icons';
*/

class App extends React.Component {
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
			<div className='App' id='App'>
				<Navbar expand='md' fixed='top' variant='dark'
				        className={'main-nav ' + (!this.state.isTop ? 'scrolled' : '')}>
					<Container>
						<Navbar.Brand href='/'>
							<img src={logo} className='logo' alt='LARGEXPO'/>
						</Navbar.Brand>
						<Navbar.Toggle aria-controls='basic-navbar-nav'/>
						<Navbar.Collapse className='justify-content-end'>
							<Nav>
								<Nav.Link href='#App'>Home</Nav.Link>
								<Nav.Link href='#AboutUs'>About us</Nav.Link>
								<Nav.Link href='#HowWeWork'>How we work</Nav.Link>
								<Nav.Link href='#OurBenefits'>Our products</Nav.Link>
								<Nav.Link href='#ContactUs'>Contact us</Nav.Link>
							</Nav>
						</Navbar.Collapse>
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
}

export default App;
