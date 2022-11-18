import React from "react";
import "./App.css";
import * as Icons from '../../node_modules/heroicons-react/build/index'
import img1 from "./Image/img0.png"
import img2 from "./Image/img1.png"
import img3 from "./Image/img2.png"
import img4 from "./Image/img3.png"
import img5 from "./Image/img4.png"
import img6 from "./Image/img5.png"
import img7 from "./Image/img6.png"
import img8 from "./Image/img7.png"
import img9 from "./Image/img8.png"
import img10 from "./Image/img9.png"
import img11 from "./Image/img10.png"
import img12 from "./Image/img11.png"
import img13 from "./Image/img12.png"
import img14 from "./Image/img13.png"
import img15 from "./Image/img14.png"
import img16 from "./Image/img15.png"
import img17 from "./Image/globalSymbol.png"

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import About from './About';
import Contact from './Contact';
import Import from "./Components/Import";
import MainComponent from "../MainFunction/MainComponent";

const App = () => {
  return (
    <div className='main'>
      <div className='header-section'>
        <header>
          <div className='header1'>
            <h3>THEMES</h3>
          </div>
          <div className="header2">
            <div className="title">
              <h3>Properties</h3>
            </div>
            <div className="buttons">
              <div className="imp-dow">
                <div>
                  <Import />
                </div>
                <div className="export-buttons">
                  <button>Export</button>
                </div>
              </div>
            </div>
          </div>
        </header>
      </div>
      <div className="body">
        <div className="grid-container">
          <Router>
            <div className="item1">
              <h3>CHART PICKER</h3>
              <hr />
              <div className='global'>
                <Link to="/About"> <Icons.Sun style={{color:'black', marginTop:'.2rem'}}/> </Link>
              </div>
              <hr />
              <div className='Charts'>
                <Link to="/Contact"> <img src={img1} alt="Global" style={{ "height": "40px" }} title = 'Bar chart'/> </Link>
                <Link to="/Contact"> <img src={img2} alt="Global" style={{ "height": "40px" }} /> </Link>
                <Link to="/Contact"> <img src={img3} alt="Global" style={{ "height": "40px" }} /> </Link>
                <Link to="/Contact"> <img src={img4} alt="Global" style={{ "height": "40px" }} /> </Link>
                <Link to="/Contact"> <img src={img5} alt="Global" style={{ "height": "40px" }} /> </Link>
                <Link to="/Contact"> <img src={img6} alt="Global" style={{ "height": "40px" }} /> </Link>
                <Link to="/Contact"> <img src={img7} alt="Global" style={{ "height": "40px" }} /> </Link>
                <Link to="/Contact"> <img src={img8} alt="Global" style={{ "height": "40px" }} /> </Link>
                <Link to="/Contact"> <img src={img9} alt="Global" style={{ "height": "40px" }} /> </Link>
                <Link to="/Contact"> <img src={img10} alt="Global" style={{ "height": "40px" }} /> </Link>
                <Link to="/Contact"> <img src={img11} alt="Global" style={{ "height": "40px" }} /> </Link>
                <Link to="/Contact"> <img src={img12} alt="Global" style={{ "height": "40px" }} /> </Link>
                <Link to="/Contact"> <img src={img13} alt="Global" style={{ "height": "40px" }} /> </Link>
                <Link to="/Contact"> <img src={img14} alt="Global" style={{ "height": "40px" }} /> </Link>
                <Link to="/Contact"> <img src={img15} alt="Global" style={{ "height": "40px" }} /> </Link>
                <Link to="/Contact"> <img src={img16} alt="Global" style={{ "height": "40px" }} /> </Link>
              </div>
            </div>
            <div className="item2">
              {/* <div> */}
              <Routes>
                <Route path="/About" element={<About />} />
                <Route path="/Contact" element={<MainComponent />} />
              </Routes>
              {/* </div> */}
            </div>
          </Router>
          <div className="item3">
            <h3>JSON FILE</h3>
            <h5>like this......</h5>
            <hr />
          </div>
        </div>
      </div>
    </div>
  )
}
export default App;
