// React
import React, { Component, Fragment } from 'react';
// Components
import Aside from './Aside.js';
import Header from './Header.js';
import Footer from './Footer.js';
import './../scss/aboutus.css'
export default class AboutUs extends Component {
 
  render () {
    return (
      <Fragment>
        <Header />
        <Aside />
        <main>
          <section id='aboutUs'>
            <div>
                <img class = "Image" src="image/jack.jpeg" />   
                <h3>Jack Daniel Kinne</h3>
                <p>Software Developer. Skilled in C++, Emergency Medicine, Java, Job Coaching, and Software Development. Strongly educated professional with a Bachelor's degree in Computer Science and English Education from Humboldt State University</p>
                <p><a href="https://github.com/Bravelemming" title="Github">GitHub</a></p>
                <p><a href="https://linkedin.com/in/jackdkinne/" title="linkedIn">linkedIn</a></p>
              </div>
              <div>
                <img class = "Image" src="image/chris.jpeg" />
                <h3>Chris Coulon</h3>
                <p>Experienced Logistics Officer and Project Manager with a demonstrated history of working both in the military industry and as an entrepreneur. Skilled in Management, Project Planning, Program Improvement, Cross-functional Team Leadership, Collaboration, and Public Speaking. Certificates include Lean Six Sigma Green Belt, Civil Military Operations Staff Planner, Outdoor Emergency Care Technician and a Double Bachelors of the Arts in International Relations & Environmental Studies from Franklin University Switzerland.</p>
                <p><a href="https://github.com/Bravelemming" title="Github">GitHub</a></p>
                <p><a href="https://linkedin.com/in/cmcoulon" title="linkedIn">linkedIn</a></p>
              </div>
              
              <div> 
                <img class = "Image" src='image/kevin.jpeg'></img>
                <h3>Kevin Couture</h3>
                <p>After graduating from the University of Washington Tacoma and earning my degree I am working to complete my apprenticeship through Apprenti partnered with Amazon.</p>
                <p><a href="https://github.com/kdcouture">GitHub</a></p>
                <p><a href="https://linkedin.com/in/kcouture939/">linkedIn</a></p>
              </div>
              <div> 
                <img class = "Image" src="image/promila.jpeg"></img>
                <h3>Promila Tamang</h3>
                <p>Versatile and experienced IT professional with a passion for innovative and transformative technologies with unquenchable desire and motivation to learn. Obsessed with providing the best customer experience through listening, empathizing and doing what is right to solve issues. Skilled in building cross-functional teams, cross-team collaboration, and self-starter with the ability to own the project through its entirety and handle ambiguity.</p>
                <p><a href="https://github.com/promilatam">GitHub</a></p>
                <p><a href="https://linkedin.com/in/promitamang">linkedIn</a></p>
              </div>
            </section>
        </main>
      <Footer />
      </Fragment>
    );
  }
}