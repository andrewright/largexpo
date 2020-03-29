import React from 'react';
import {Button, Col, Container, Form, Row} from 'react-bootstrap';
import './contact-us.scss';

function ContactUs() {
	return (
		<div className='contact-us bg-settings'>
			<Container className='contact-us-form'>
				<Row>
					<Col>
						<h1>Contact us</h1>
						<p>Feel free to contact us and ask any questions within our professional financial/investment competence.
							We’d be happy to help you as soon as possible.
						</p>
					</Col>
				</Row>
				<Form>
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
							<Form.Control as='textarea' rows='3'/>
						</Form.Group>
					</Form.Row>
					<Form.Row>
						<Form.Group as={Col}>
							<Button type='submit'>Send message</Button>
						</Form.Group>
					</Form.Row>
				</Form>
			</Container>
		</div>
	);
}

export default ContactUs;
