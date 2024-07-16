import React from 'react';
import HomepageNavbar from './HomepageNavbar';
import Footer from './Footer';
import '../../styles/Home.css';

const Home = () => {
  return (
    <>
      <HomepageNavbar />

      <div className='main'>
        <section className='one'>
          <h1>HOME</h1>
          <p>Welcome to our amazing product landing page!</p>
          <p>
            Our platform offers a wide range of products to suit all your needs. Explore our categories and find the best deals on electronics, fashion, home appliances, and more.
          </p>
        </section>
        <section className='two'>
          <h1>About</h1>
          <p>Learn more about our mission, vision, and values.</p>
          <p>
            We are dedicated to providing top-quality products and exceptional customer service. Our mission is to create a seamless shopping experience, and our vision is to become the leading online retailer worldwide.
          </p>
          <p>
            Our values include:
            <ul>
              <li>Customer Satisfaction: We prioritize our customers' needs and strive to exceed their expectations.</li>
              <li>Integrity: We conduct our business with honesty and transparency.</li>
              <li>Innovation: We continuously improve and innovate to provide the best products and services.</li>
              <li>Sustainability: We are committed to sustainable practices and reducing our environmental impact.</li>
            </ul>
          </p>
        </section>
        <section className='three'>
          <h1>Features</h1>
          <div className='product-gallery'>
            <div className='product'>
              <img src='https://via.placeholder.com/150' alt='Product 1' />
              <p>Product 1</p>
              <p>High-quality electronic device with the latest features.</p>
            </div>
            <div className='product'>
              <img src='https://via.placeholder.com/150' alt='Product 2' />
              <p>Product 2</p>
              <p>Stylish and comfortable apparel for all seasons.</p>
            </div>
            <div className='product'>
              <img src='https://via.placeholder.com/150' alt='Product 3' />
              <p>Product 3</p>
              <p>Durable and reliable home appliance to make your life easier.</p>
            </div>
          </div>
          <p>
            Our platform features a user-friendly interface, secure payment options, and fast delivery services. Enjoy a hassle-free shopping experience with us.
          </p>
        </section>
        <section className='four'>
          <h1>More About Us</h1>
          <p>Discover our story and the people behind our success.</p>
          <p>
            Founded in [Year], we started with a small team of passionate individuals who aimed to revolutionize the online shopping experience. Over the years, we have grown into a large, dedicated team working tirelessly to bring you the best products and services.
          </p>
          
          <p>
            Our journey has been filled with innovation, growth, and a commitment to excellence. We are excited about the future and look forward to serving you better each day.
          </p>
        </section>
      <Footer />
      </div>
    </>
  );
};

export default Home;
