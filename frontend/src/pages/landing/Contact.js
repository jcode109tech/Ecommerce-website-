import React from 'react'
import HomepageNavbar from './HomepageNavbar'
import Footer from './Footer'
import '../../styles/Royalbackground.css'

const Contact = () => {
  return (
      <>
        <HomepageNavbar />
            <div className="contact-page-wrapper">
                <h1 className="primary-heading">Have Question In Mind?</h1>
                <h1 className="primary-heading">Let Us Help You</h1>
              <div className="contact-form-container">
                <input type="text" placeholder="yourmail@gmail.com" />
                <button className="secondary-button">Submit</button>
               </div>
            </div>
        
        <Footer />
      </>
  )
}

export default Contact