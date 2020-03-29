import React from 'react';
import { Col, Container, Nav, Row, Tab } from "react-bootstrap";
import './outbenefits.scss';

function OurBenefits() {
	return (
		<div className='our-benefits' id='OurBenefits'>
			<Container className='py-5'>
				<Row>
					<Col>
						<h3>Our benefits</h3>
						<p className='pt-4'>Our decade-and-a-half spent in the field of fish and sea product wholesale has allowed us to study the market and come up with a series of unique solutions to its most common (and also its less-known) problems. That’s the reason we can proudly claim that Oceanic Fisheries N.B. provides the following benefits for its partners:</p>
					</Col>
				</Row>
			</Container>
			<Container>
				<Row>
					<Col>
						<Tab.Container id='left-tabs-example' defaultActiveKey='tab-1'>
							<Row className='mb-4'>
								<Col>
									<Nav variant='pills' className="list-tabs">
										<Nav.Item>
											<Nav.Link eventKey='tab-1'>Quality products</Nav.Link>
										</Nav.Item>
										<Nav.Item>
											<Nav.Link eventKey='tab-2'>Wide product range</Nav.Link>
										</Nav.Item>
										<Nav.Item>
											<Nav.Link eventKey='tab-3'>High-end equipment</Nav.Link>
										</Nav.Item>
										<Nav.Item>
											<Nav.Link eventKey='tab-4'>Qualified personnel</Nav.Link>
										</Nav.Item>
										<Nav.Item>
											<Nav.Link eventKey='tab-5'>Flexible pricing</Nav.Link>
										</Nav.Item>
										<Nav.Item>
											<Nav.Link eventKey='tab-6'>Rapid delivery</Nav.Link>
										</Nav.Item>
									</Nav>
								</Col>
							</Row>
							<Row>
								<Col>
									<Tab.Content className='text-left'>
										<Tab.Pane eventKey='tab-1'>
											<p>Сaught in the best and cleanest natural reservoirs around the world, our fish undergoes a thorough check for chemical and hormonal impurities and other pollutants: only the best fish gets into the packaging</p>
										</Tab.Pane>
										<Tab.Pane eventKey='tab-2'>
											<p>Working with professional chefs and fish processors around the world has allowed us to develop a diverse range of products from each specific fish type, suitable for consumers with all sorts of food habits and allergical intolerances.</p>
										</Tab.Pane>
										<Tab.Pane eventKey='tab-3'>
											<p>Checked and maintained on a regular basis, our equipment matches all international standards for food processing and distribution, providing quality during all stages of production, including freezing and storing already-prepared products.</p>
										</Tab.Pane>
										<Tab.Pane eventKey='tab-4'>
											<p>People we’re hiring have passion for their job, apart from being professional in it: If we do our job – we do it good, and you have any questions about your order – they will be answered immediately. That’s what keeps us on the market for all these years.</p>
										</Tab.Pane>
										<Tab.Pane eventKey='tab-5'>
											<p>Selling large wholesale amounts of products and constantly analyzing global market prices allows us to find compromises and keeping our prices competitive – especially, for our loyal customers who can always count on bonuses and discounts when ordering from us repeatedly.</p>
										</Tab.Pane>
										<Tab.Pane eventKey='tab-6'>
											<p>Most of our partners are significant logistics companies that are highly-experienced in a field of transporting frozen nutrition products, so they do not skimp on appropriately-designed trucks and containers. That’s why we’re always able to deliver fresh products to almost any place in need of them – fast!</p>
										</Tab.Pane>
									</Tab.Content>
								</Col>
							</Row>
						</Tab.Container>
					</Col>
				</Row>
			</Container>
		</div>
	);
}

export default OurBenefits;
