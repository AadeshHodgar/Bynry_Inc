import React from 'react';
import { useParams, Link } from 'react-router-dom';

const ProfileDetails = ({ profiles }) => {
  const { id } = useParams();
  const profile = profiles.find((profile) => profile.id === parseInt(id));

  if (!profile) return <p>Profile not found</p>;

  return (
    <div className="profile-details">
      <img src={profile.photo} alt={profile.name} />
      <h2>{profile.name}</h2>
      <p>{profile.description}</p>
      <p>Latitude: {profile.address.lat}</p>
      <p>Longitude: {profile.address.lng}</p>
      <Link to="/">Back to profiles</Link>
    </div>
  );
};

export default ProfileDetails;
