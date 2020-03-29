import React from 'react';
import {Button, Col, Container, Form, Row} from 'react-bootstrap';
import './contact-us.scss';
import Bg from "./bg-contact.jpg";
import {Parallax} from "react-parallax";

function ContactUs() {
	return (
		<Parallax
			bgImage={Bg}
			blur={{min: -1, max: 2}}
			strength={800}
		>
			<div className='contact-us common-bg-settings' id='ContactUs'>
				<Container className='contact-us-form'>
					<Row>
						<Col>
							<h3>Contact us</h3>
							<p>Feel free to contact us and ask any questions within our professional financial/investment competence.
								We’d be happy to help you as soon as possible.
							</p>
						</Col>
					</Row>
					<Form className='pt-5'>
						<Form.Row>
							<Form.Group as={Col}>
								<Form.Control type='text' placeholder='Name *'/>
							</Form.Group>
							<Form.Group as={Col}>
								<Form.Control type='email' placeholder='Email *'/>
							</Form.Group>
						</Form.Row>
						<Form.Row>
							<Form.Group as={Col}>
								<Form.Control type='text' placeholder='Phone'/>
							</Form.Group>
							<Form.Group as={Col}>
								<Form.Control type='text' placeholder='Subject'/>
							</Form.Group>
						</Form.Row>
						<Form.Row>
							<Form.Group as={Col}>
								<Form.Control as='textarea' placeholder='Comments' rows='3'/>
							</Form.Group>
						</Form.Row>
						<Form.Row>
							<Form.Group as={Col}>
								<Button type='submit' variant='dark' className=''>Send message</Button>
							</Form.Group>
						</Form.Row>
					</Form>
					<Row>
						<Col>
							<p>LARGEXPO PTE. LTD, registration no. 202006235H, registered address: 10 Anson Road #29-05A International
								Plaza, Singapore, 079903</p>
						</Col>
					</Row>
				</Container>
			</div>
		</Parallax>
	);
}

export default ContactUs;
