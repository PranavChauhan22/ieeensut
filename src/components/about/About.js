import './About.css'
import vectorabout from "../assets/images/abt.jpg"
import AboutPageFooter from './Aboutpagefooter'

function About() {
  return (
    <section className="about" id="about">
      <div className="main">
        <img src={vectorabout} />
        <div className="about-text">
          <h4>ABOUT</h4>
          <div className='head-bt'>An</div>
          <div className='head-bt'>Experienced</div>
          <div className='head-bt'>Student</div>
          <div className='head-bt'>Branch</div>
          <h3 className="aboutText2">Provides diverse opportunities</h3>
          <p className="about-text-p">Our foremost objective is to create an environment which promotes students to learn technical knowledge, inculcate managerial skills and develop their overall personalities.</p>
          <button className="about-us">ABOUT US</button>
        </div>
      </div>
      <AboutPageFooter/>
    </section>
  )
}

export default About
