import React, { useState } from 'react';
import axios from 'axios';

const Profile = () => {
  const [username, setUsername] = useState('');
  const [profileData, setProfileData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchProfileData = async (username) => {
    try {
      setLoading(true);
      setError(null);
      const response = await axios.get(`https://api.github.com/users/${username}`);
      setProfileData(response.data);
    } catch (error) {
      setError('Error fetching profile data');
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (username.trim() === '') {
      setError('Please enter a username');
      return;
    }

    setLoading(true);
    setError(null);
    fetchProfileData(username);
  };

  return (
    <section className='text-center'>
      <form className='searchBox flex justify-center mt-10' onSubmit={handleSubmit}>
        <input
          className="rounded-sm border-2 border-black"
          type="text"
          placeholder="Search..."
          id="search-input"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <button
          className="rounded-md border border-transparent px-3 py-2 text-sm font-semibold bg-blue-800 cursor-pointer transition duration-250 hover:border-blue-500 ml-6"
          type="submit"
          id="search-button"
        >
          Search
        </button>
      </form>

      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}

      {profileData && (
        <div className="whole_Card mt-10 border border-solid border-gray-300 rounded-md p-4 m-4 shadow-md mx-auto max-w-2xl bg-white">
          <div className='card_mini flex justify-between'>
            <div className="img-cont">
              <img src={profileData.avatar_url} alt={profileData.name} />
            </div>
            <div className="card_content">
              <div className="upper_content">
                <h2>{profileData.name}</h2>
                <h6 className='tagName'>@{profileData.login}</h6>
                <h5 className='date'>{profileData.created_at}</h5>
              </div>
            </div>
          </div>
          {/* Small stats card */}
          <div className="stats_card flex justify-center mt-4 gap-3">
            <div className="stat">
              <div className="label">Repos</div>
              <div className="number">{profileData.public_repos}</div>
            </div>
            <div className="stat">
              <div className="label">Followers</div>
              <div className="number">{profileData.followers}</div>
            </div>
            <div className="stat">
              <div className="label">Following</div>
              <div className="number">{profileData.following}</div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Profile;
