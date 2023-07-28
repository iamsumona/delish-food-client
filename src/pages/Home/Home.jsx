import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <div className="hero min-h-screen" style={{ backgroundImage: `url("https://img.freepik.com/free-photo/top-view-table-full-delicious-food-composition_23-2149141353.jpg?w=740&t=st=1682990186~exp=1682990786~hmac=ca63dfffd6c2207059b6082eab2aa19c56fae85e28c77e0fbf89dfcbe52a2aec")` }}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
      <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
      <div className=''>
      <Link to='/chefdetails'>
        <button className="btn btn-outline btn-success ">Chef Section</button>
      </Link>
      <Link to='/contact'><button className="btn btn-outline btn-success ml-2 mr-2">Contact US</button>
      </Link>
      
      <Link to='/register'><button className="btn btn-outline btn-success">Sign up Here</button>
      </Link>
      
      </div>
      
    </div>
  </div>
</div>
        </div>
    );
};

export default Home;