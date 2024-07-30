import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import axios from 'axios';
import ProfileList from './components/ProfileList';
import ProfileDetails from './components/ProfileDetails';
import AdminPanel from './components/AdminPanel';
import Map from './components/Map';
import LoadingIndicator from './components/LoadingIndicator';
import './App.css';

const App = () => {
  const [profiles, setProfiles] = useState([]);
  const [selectedAddress, setSelectedAddress] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchProfiles = async () => {
      setIsLoading(true);
      try {
        const response = await axios.get('/api/profiles');
        setProfiles(response.data);
      } catch (error) {
        console.error('Error fetching profiles:', error);
      }
      setIsLoading(false);
    };

    fetchProfiles();
  }, []);

  const handleShowMap = (address) => {
    setSelectedAddress(address);
  };

  const handleAddProfile = (newProfile) => {
    setProfiles([...profiles, { ...newProfile, id: profiles.length + 1 }]);
  };

  const handleDeleteProfile = (profileId) => {
    setProfiles(profiles.filter((profile) => profile.id !== profileId));
  };

  const filteredProfiles = profiles.filter((profile) =>
    profile.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Router>
      <div className="App">
        <nav className="navbar">
          <h1>ProfileMap Web Application</h1>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/admin">Admin Panel</Link>
            </li>
          </ul>
        </nav>
        <input
          type="text"
          placeholder="Search profiles"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        {isLoading ? (
          <LoadingIndicator />
        ) : (
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <ProfileList
                    profiles={filteredProfiles}
                    onShowMap={handleShowMap}
                    onDeleteProfile={handleDeleteProfile}
                  />
                  {selectedAddress && (
                    <div className="map-container">
                      <Map location={selectedAddress} />
                    </div>
                  )}
                </>
              }
            />
            <Route
              path="/admin"
              element={
                <AdminPanel
                  profiles={profiles}
                  onAddProfile={handleAddProfile}
                  onDeleteProfile={handleDeleteProfile}
                />
              }
            />
            <Route
              path="/profile/:id"
              element={<ProfileDetails profiles={profiles} />}
            />
          </Routes>
        )}
      </div>
    </Router>
  );
};

export default App;
