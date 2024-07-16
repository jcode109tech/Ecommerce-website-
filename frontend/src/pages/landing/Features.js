import React from 'react';
import HomepageNavbar from './HomepageNavbar';
import Footer from './Footer';
import '../../styles/feature.css'


// Import your images
import image1 from '../../Assets/images/image1.jpg';
import image2 from '../../Assets/images/image2.jpeg';
import image3 from '../../Assets/images/image3.jpeg';
import image4 from '../../Assets/images/image4.jpeg'
// Import all other images you have similarly

const Features = () => {
  // Example image URLs (imported from directory)
  const images = [
    image1,
    image2,
    image3,
    image4
    // Add all other imported images here
  ];

  return (
    <>
      <HomepageNavbar />
      <div className="features-container">
        <h2>Featured Images</h2>
        <div className="image-list">
          {images.map((image, index) => (
            <div key={index} className="image-card">
              <img src={image} alt={`Image ${index + 1}`} />
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Features;
