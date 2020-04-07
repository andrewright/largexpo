import React from 'react';
import {Col, Container, Row} from "react-bootstrap";
import {Parallax} from 'react-parallax';
import './aboutus.scss';
import Bg from './about-us-bg.jpg';

function AboutUs() {
	return (
		<Parallax
			bgImage={Bg}
			blur={{min: -1, max: 2}}
			strength={800}
		>
			<div className='about-us common-bg-settings' id='AboutUs'>

				<Container>
					<Row>
						<Col>
							<h1>About Us</h1>
							<p className='pt-5'>LARGEXPO PTE. LTD was established in early 2020’s. We’ve spent more than 15 years
								being engaged in wholesale and retail sales of freshly frozen fish and seafood products as well as
								self-made fish dishes. Our company is constantly developing, actively introducing the most modern
								technologies into its workflow.</p>
						</Col>
					</Row>
				</Container>

			</div>
		</Parallax>
	);
}

export default AboutUs;
