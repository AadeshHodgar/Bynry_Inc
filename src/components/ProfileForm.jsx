import React, { useState } from 'react';

const ProfileForm = ({ onAddProfile }) => {
  const [name, setName] = useState('');
  const [photo, setPhoto] = useState('');
  const [description, setDescription] = useState('');
  const [lat, setLat] = useState('');
  const [lng, setLng] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newProfile = {
      name,
      photo,
      description,
      address: {
        lat: parseFloat(lat),
        lng: parseFloat(lng),
      },
    };
    onAddProfile(newProfile);
    setName('');
    setPhoto('');
    setDescription('');
    setLat('');
    setLng('');
  };

  return (
    <form onSubmit={handleSubmit} className="profile-form">
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <input
        type="url"
        placeholder="Photo URL"
        value={photo}
        onChange={(e) => setPhoto(e.target.value)}
        required
      />
      <textarea
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
      />
      <input
        type="number"
        placeholder="Latitude"
        value={lat}
        onChange={(e) => setLat(e.target.value)}
        required
      />
      <input
        type="number"
        placeholder="Longitude"
        value={lng}
        onChange={(e) => setLng(e.target.value)}
        required
      />
      <button type="submit">Add Profile</button>
    </form>
  );
};

export default ProfileForm;
