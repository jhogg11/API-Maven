import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './NavBar.css'
import './Home.css'
import './Footer.css'
import { Routes, Route, Link, useNavigate } from "react-router-dom"
import { cards } from './components/static/api-details'
import Contact from './components/Contact'



// function Contact() {
//   return <h1>It's a test</h1>
// }

function NavBar() {
  return <nav>
    <div className="nav-wrapper">
      <div className="brand-logo"><Link to="/" >HUMMINGBIRD</Link></div>
      <ul id="nav-mobile" className="right">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </div>
  </nav>
}


function Card(props) {

  const { name, src, description, bullets, path } = props.props;
  const navigate = useNavigate();
  const handleOnClick = () => navigate(path);

  console.log(name)

  return <div className="card" onClick={handleOnClick}>
        <div className="card-top">
          <div className="card-image home-card">
            <img src={src} />
          </div>
          <span className="card-title">{name}</span>
        </div>
        <div className="card-content">
          <p>{description}</p>
          <div>
            <ul>
              {bullets.map((bullet, index) => <li key={ index }>{bullet}</li>)}
            </ul>
          </div>
        </div>
  {/*      <div className="card-action">
          <a href="#">This is a link</a>
        </div>*/}
  </div>
}


function Home() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <h1 className="home-header">Hummingbird APIs</h1>
      <div className="api-listing">API Listing</div>
      <div className="cards">
        <Card props={cards[0]} />
        <Card props={cards[1]} />
      </div>
      <div className="rapid-holder">
        <div>Available on RapidAPI</div>
        <img src="https://rapidapi.com/uploads/blue_logo_f50bced105.svg" />
      </div>
    </div>
  )
}


function Footer() {
  return <footer className="page-footer">
    <div className="container">
      <div className="row">
        <div className="col l6 s12">
          <h5 className="">Hummingbird APIs</h5>
         {/* <p className="grey-text text-lighten-4">Affordable, reliable data for your projects</p>*/}
        </div>
        <div className="col l4 offset-l2 s12 footer-links">
          {/*<h5 className="white-text">Links</h5>*/}
          <ul>
            <li><Link to="/terms">Terms of Service</Link></li>
            <li><Link to="/privacy-policy">Privacy Policy</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>
      </div>
    </div>
    <div className="footer-copyright">
      {/*<div className="container">
      © 2014 Copyright Text
      <a className="grey-text text-lighten-4 right" href="#!">More Links</a>
      </div>*/}
    </div>
  </footer>
}

function App() {
  
  return <>
    <NavBar />
    {/*<nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>*/}
    <div className="main-container container">
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/terms" element={<div/>} />
        <Route path="/privacy-policy" element={<div/>} />
      </Routes>
    </div>
    <Footer />
  </>
}

export default App
