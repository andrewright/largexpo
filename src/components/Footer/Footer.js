import React from 'react';
import {Col, Container, Row} from 'react-bootstrap';
import logoFooter from '../../logo.svg';
import './Footer.scss';

function Footer() {
	return (
		<div className='main-footer'>
			<Container fluid>
				<Row className='pb-2'>
					<Col className='pb-4'>
						<img src={logoFooter} height='60px' alt='LARGEXPO'/>
					</Col>
				</Row>
				<Row className='border-top-dotted pt-5'>
					<Col>© COPYRIGHT 2020 LARGEXPO PTE. LTD</Col>
				</Row>
			</Container>
		</div>
	);
}

export default Footer;
