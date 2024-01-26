import React from 'react';

const Profile = () => {
  return (
    <section className=' text-center  '>
      <div className='searchBox flex justify-center mt-10  '>
        <input  className="rounded-sm border-2 border-black'" type="text" placeholder="Search..." id="search-input" />
      <button className="rounded-md border border-transparent px-3 py-2 text-sm font-semibold bg-blue-800 cursor-pointer transition duration-250 hover:border-blue-500 ml-6" type="button" id="search-button ">Search</button></div>
     {/* card content */}
     <div className="whole_Card">
      <div className='card_mini'>
        <div className="img-cont">  
        <img src="" alt="Dummy photo" />
        </div>
        <div className="card_content">
          <div className="upper_content">
            <h2>Akshit Lakhera</h2>
            <h6 className='tagName'>@vihaan9990</h6>
            <h5 className='date'>Joined on 2 april 2022</h5>

          </div>
        </div>
      </div>
      {/* Small stats card */}
      <div className="stats_card flex justify-center mt-4">
      <div className="stat">
            <div className="label">Repos</div>
            <div className="number">100</div>
        </div>

        <div className="stat">
            <div className="label">Followers</div>
            <div className="number">500</div>
        </div>

        <div className="stat">
           <div className="label">Following</div>
            <div className="number">200</div>
        </div>
      </div>
      </div>
    </section>
  )
};

export default Profile;
