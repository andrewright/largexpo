import React from 'react';
import { Container } from "react-bootstrap";
import './billboard.scss';

function Billboard() {
	return (
		<div className='billboard'>
			<Container fluid='lg' className='billboard-container'>
				<div className='billboard-title_block'>
					<h1>Billboard</h1>
					<p>Some Text about Alfabank</p>
				</div>
			</Container>
		</div>
	);
}

export default Billboard;
