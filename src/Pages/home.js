import React from 'react';
import Billboard from '../components/Billboard/Billboard';
import AboutUs from '../components/AboutUs/AboutUs';
import HowWeWork from '../components/HowWeWork/HowWeWork';
import OurBenefits from '../components/OurBenefits/OurBenefits';
import ContactUs from '../components/ContactUs/ContactUs';

function HomePage() {
	return (
		<>
			<Billboard></Billboard>
			<AboutUs></AboutUs>
			<HowWeWork></HowWeWork>
			<OurBenefits></OurBenefits>
			<ContactUs></ContactUs>
		</>
	);
}

export default HomePage;
