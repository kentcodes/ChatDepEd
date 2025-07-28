import React from 'react';
import UploadDocument from './UploadDocument';
import AuditLog from './AuditLog';
import Notifications from './Notifications';
import SearchFilter from './SearchFilter';
import ExportButtons from './ExportButtons';

const handleSearch = query => {
  // Placeholder handler until backend integration
  console.log('Search query:', query);
};

const Dashboard = () => (
  <div>
    <h2>Admin Dashboard</h2>
    <p>Manage data entry, uploads, and view statistics.</p>
    <SearchFilter onSearch={handleSearch} />
    <UploadDocument />
    <ExportButtons />
    <AuditLog />
    <Notifications />
  </div>
);

export default Dashboard;
