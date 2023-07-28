import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
    return (
        <div>
            <div className="hero min-h-screen" style={{ backgroundImage: `url("https://img.freepik.com/free-photo/penne-pasta-tomato-sauce-with-chicken-tomatoes-wooden-table_2829-19744.jpg?size=626&ext=jpg&ga=GA1.2.1194092690.1683134302&semt=robertav1_2_sidr")` }}>
  <div className="hero-overlay bg-opacity-60"></div>
  
    <div className="">
      <h1 className="mb-5 text-5xl font-bold text-center text-white">About us</h1>
      <p className="mb-5 text-3xl text-center text-white">At Delish-food, we're passionate about all things food. Our mission is to inspire and empower people to create delicious, homemade meals with ease. We believe that cooking should be fun, approachable, and accessible to everyone, regardless of their skill level or experience in the kitchen. That's why we offer a wide range of recipes, cooking tips, and how-to guides to help you make the most of your time in the kitchen. Whether you're a seasoned home cook or just starting out, we're here to help you discover new flavors, try new techniques, and fall in love with cooking all over again.</p>
      <div className='items-center justify-center text-center'>
        <Link to='/'><button className="btn btn-success btn-outline ">Get Started</button>
        </Link>
        
      </div>
      
    </div>
  
</div>
        </div>
    );
};

export default About;