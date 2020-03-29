import React from 'react';
import {Col, Container, Row} from "react-bootstrap";
import './billboard.scss';

function Billboard() {
	return (
		<div className='billboard common-bg-settings'>
			<Container fluid='lg' className='billboard-container'>
				<Row>
					<Col className='billboard-title'>
						<div className='billboard-title-sub'>WE MAKE YOUR EVERY FISH</div>
						<div className='billboard-title-big'>COME TRUE!</div>
					</Col>
				</Row>
			</Container>
		</div>
	);
}

export default Billboard;
