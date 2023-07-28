import React, { useEffect, useState } from 'react';
import { Link, useNavigation } from 'react-router-dom';
import LoadingSpinner from '../../Components/Loader/LoadingSpinner';

const ChefDetails = () => {
  const navigation = useNavigation()
    console.log(navigation.state)
    if (navigation.state === 'loading') {
        return <LoadingSpinner />
    }
  const [chefdetails, setChefDetails] = useState([])
  useEffect(() => {
    fetch("https://server-mushfikyeasirpk.vercel.app/allData")
      .then(res => res.json())
      .then(data => setChefDetails(data))
  }, [])
  console.log(chefdetails);
  return (
    <div>
      <div className="hero min-h-screen " style={{ backgroundImage: `url("https://img.freepik.com/free-photo/top-view-table-full-delicious-food-arrangement_23-2149141326.jpg?w=740&t=st=1682990744~exp=1682991344~hmac=9f84ea1770f01ce1aedebe9e62a2cfea93f8d53a26fa628aa167027a9e414593")` }}>
        <div className="hero-overlay bg-opacity-60 grid gap-6 md:grid-cols-3 sm:grid-cols-2 mx-16 ">
          {
            chefdetails.map((chef) => <div key={chef.id} className="card card-compact w-96 bg-base-100 shadow-xl mt-4 mb-4 ml-4">
              <figure><img src={chef.chef_picture} alt="Shoes" /></figure>
              <div className="font-bold text-lg pl-2">
                <h2 className="text-2xl">{chef.chef_name}</h2>
                <p>Experience : {chef.years_of_experience}</p>
                <p>Number of Recipies: {chef.num_recipes}</p>
                <p>Likes: {chef.likes}</p>
                <div className="card-actions justify-end mb-2 mr-4">
                  <Link to={`/chefdetails/${chef.id}`}><button className="btn btn-primary">View Recipes</button>
                  </Link>

                </div>
              </div>

            </div>)


          }
        </div>


      </div>
    </div>
  );
};

export default ChefDetails;