import React from 'react';

const Profile = () => {
  return (
    <section className=' text-center  '>
      <div className='searchBox flex justify-center  '>
        <input  className="rounded-sm border-2 border-black'" type="text" placeholder="Search..." id="search-input" />
      <button className="rounded-md border border-transparent px-3 py-2 text-sm font-semibold bg-blue-800 cursor-pointer transition duration-250 hover:border-blue-500 ml-6" type="button" id="search-button ">Search</button></div>
      <div className='card'>
        

      </div>
    </section>
  )
};

export default Profile;
