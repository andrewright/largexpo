import React from 'react';
import {Col, Container, Row} from 'react-bootstrap';
import logoFooter from './logo-footer.svg';
import './Footer.scss';

function Footer() {
	return (
		<div className='main-footer bg-dark py-3'>
			<Container>
				<Row className='pb-2'>
					<Col>
						<img src={logoFooter} height='40px' alt='Logo Footer'/>
					</Col>
				</Row>
				<Row>
					<Col className='border-top pt-2'>2020 © AlfaBank</Col>
				</Row>
			</Container>
		</div>
	);
}

export default Footer;
