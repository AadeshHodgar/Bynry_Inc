import React from 'react';
import Profile from './Profile';

const ProfileList = ({ profiles, onShowMap, onDeleteProfile }) => (
  <div className="profile-list">
    {profiles.map((profile) => (
      <Profile
        key={profile.id}
        profile={profile}
        onShowMap={onShowMap}
        onDeleteProfile={onDeleteProfile}
      />
    ))}
  </div>
);

export default ProfileList;
