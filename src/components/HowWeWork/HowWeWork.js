import React from 'react';
import {Card, CardDeck, Col, Container, Row} from "react-bootstrap";
import './howwework.scss';
import Bg from "./howwework-bg.jpg";
import {Parallax} from "react-parallax";

function HowWeWork() {
	return (
		<Parallax
			bgImage={Bg}
			blur={{min: -1, max: 2}}
			strength={800}
		>
			<div className='how-we-work common-bg-settings' id='HowWeWork'>
				<Container className='text-part'>
					<Row>
						<Col>
							<h1>How we work</h1>
							<p className='pt-5'>Our production premises are equipped with high-tech modern equipment. Production
								workshop for salted, smoked and dried fish has the capacity to manufacture and store a large volume of
								product. LARGEXPO PTE. uses high-quality raw materials, purchased directly from our trusted
								partner fisheries for manufacturing and trading:</p>
						</Col>
					</Row>
				</Container>
				<Container fluid>
					<CardDeck className='out-benefits-cards pt-4'>
						<Card className='out-benefits-cards-item'>
							<Card.Body>
								<Card.Title>FISH PRODUCTS</Card.Title>
								<Card.Text>We sell all sorts of raw fish products, including fish fillets, steaks, salty, smoked and
									dried fish.</Card.Text>
							</Card.Body>
						</Card>
						<Card>
							<Card.Body>
								<Card.Title>SEAFOOD</Card.Title>
								<Card.Text>These include many different sorts of delicious caviar, shrimps, crab sticks and sea
									cabbage.</Card.Text>
							</Card.Body>
						</Card>
						<Card>
							<Card.Body>
								<Card.Title>FULL FISH MEAL</Card.Title>
								<Card.Text>Fish and seafood that does’nt make it onto your table, can be used to produce feeds for
									cattle, your favourite pets, or other (aquarium) fish.</Card.Text>
							</Card.Body>
						</Card>
					</CardDeck>
				</Container>
			</div>
		</Parallax>
	);
}

export default HowWeWork;
