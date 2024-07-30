import React from 'react';
import { Link } from 'react-router-dom';

const Profile = ({ profile, onShowMap, onDeleteProfile }) => (
  <div className="profile">
    <img src={profile.photo} alt={profile.name} />
    <h2>{profile.name}</h2>
    <p>{profile.description}</p>
    <button onClick={() => onShowMap(profile.address)}>Summary</button>
    <Link to={`/profile/${profile.id}`}>
      <button>Details</button>
    </Link>
    <button onClick={() => onDeleteProfile(profile.id)}>Delete</button>
  </div>
);

export default Profile;
