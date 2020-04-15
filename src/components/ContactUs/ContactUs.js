import React from 'react';
import nodemailer from 'nodemailer';
import {Button, Col, Container, Form, Row} from 'react-bootstrap';
import './contact-us.scss';
import Bg from "./bg-contact.jpg";
import {Parallax} from "react-parallax";

class ContactUs extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			name: '',
			phone: '',
			subject: '',
			email: '',
			message: ''
		};

		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);

	}

	handleSubmit(event) {
		console.log('ContactUs.js:25', this.state);
		event.preventDefault();

		const account = {
			smtp: {
				host: 'smtp.ethereal.email',
				port: 587,
				auth: {
					user: 'sean.hirthe@ethereal.email',
					pass: '8gSE6pzapuSdkmreHg'
				}
			}
		};

		// Create a SMTP transporter object
		let transporter = nodemailer.createTransport({
			host: account.smtp.host,
			port: account.smtp.port,
			secure: account.smtp.secure,
			auth: {
				user: account.user,
				pass: account.pass
			}
		});

		// Message object
		let message = {
			from: `${this.state.name} <${this.state.email}>`,
			to: 'from web <kashejtng@gmail.com>',
			subject: `${this.state.subject}`,
			text: `Message: ${this.state.message} ${this.state.phone} ? /r/n phone: ${this.state.phone} : ''`,
			html: `<p>${this.state.message}</p> <p>${this.state.phone}</p>`
		};

		transporter.sendMail(message, (err, info) => {
			if (err) {
				console.log('Error occurred. ' + err.message);
				return process.exit(1);
			}

			console.log('Message sent: %s', info.messageId);
			// Preview only available when sending through an Ethereal account
			console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
		});
	}

	handleChange(event) {
		console.log('ContactUs.js:24', event.target.value);
		this.setState({[event.target.name]: event.target.value});
	}

	render() {
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
								<p>Feel free to contact us and ask any questions within our professional financial/investment
									competence.
									We’d be happy to help you as soon as possible.
								</p>
							</Col>
						</Row>
						<Form className='pt-5' validated='validated' onSubmit={this.handleSubmit}>
							<Form.Row>
								<Form.Group as={Col}>
									<Form.Control type='text' name='name' required placeholder='Name *' onChange={this.handleChange}/>
								</Form.Group>
								<Form.Group as={Col}>
									<Form.Control type='email' name='email' required placeholder='Email *' onChange={this.handleChange}/>
								</Form.Group>
							</Form.Row>
							<Form.Row>
								<Form.Group as={Col}>
									<Form.Control type='text' name='phone' placeholder='Phone' onChange={this.handleChange}/>
								</Form.Group>
								<Form.Group as={Col}>
									<Form.Control type='text' name='subject' placeholder='Subject' onChange={this.handleChange}/>
								</Form.Group>
							</Form.Row>
							<Form.Row>
								<Form.Group as={Col}>
									<Form.Control as='textarea' name='message' required placeholder='Comments' rows='3' onChange={this.handleChange}/>
								</Form.Group>
							</Form.Row>
							<Form.Row>
								<Form.Group as={Col}>
									<Button type='submit' variant='dark'>Send message</Button>
								</Form.Group>
							</Form.Row>
						</Form>
						<Row>
							<Col>
								<p>LARGEXPO PTE. LTD, registration no. 202006235H, registered address: 10 Anson Road #29-05A
									International
									Plaza, Singapore, 079903</p>
							</Col>
						</Row>
					</Container>
				</div>
			</Parallax>
		);
	}
}

export default ContactUs;
