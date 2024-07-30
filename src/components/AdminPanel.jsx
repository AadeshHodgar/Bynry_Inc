import React from 'react';
import ProfileForm from './ProfileForm';
import ProfileList from './ProfileList';

const AdminPanel = ({ profiles, onAddProfile, onDeleteProfile }) => {
  return (
    <div className="admin-panel">
      <h2>Admin Panel</h2>
      <ProfileForm onAddProfile={onAddProfile} />
      <ProfileList
        profiles={profiles}
        onShowMap={() => {}}
        onDeleteProfile={onDeleteProfile}
      />
    </div>
  );
};

export default AdminPanel;
