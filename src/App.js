import React from 'react';
import Header from './components/Header/Header'
import Billboard from './components/Billboard/Billboard'
import About from './components/About/About'
import HowWeWork from './components/HowWeWork/HowWeWork'
import OurBenefits from './components/OurBenefits/OurBenefits'
import ContactUs from './components/ContactUs/ContactUs'
import Footer from './components/Footer/Footer'
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Billboard></Billboard>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <About></About>
      <HowWeWork></HowWeWork>
      <ContactUs></ContactUs>
      <OurBenefits></OurBenefits>
      <Footer></Footer>
    </div>
  );
}

export default App;
