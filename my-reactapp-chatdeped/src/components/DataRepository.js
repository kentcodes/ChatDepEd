import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import SDOProfile from './repository/SDOProfile';
import SchoolPersonnel from './repository/SchoolPersonnel';
import SchoolStatistics from './repository/SchoolStatistics';
import DepEdResources from './repository/DepEdResources';
import FacilitiesSupport from './repository/FacilitiesSupport';
import OrganizationDocs from './repository/OrganizationDocs';
import AdminOfficeReports from './repository/AdminOfficeReports';

const DataRepository = () => (
  <div>
    <h2>Data Repository</h2>
    <nav>
      <ul>
        <li><Link to="sdo-profile">SDO Profile</Link></li>
        <li><Link to="school-personnel">School Personnel Data</Link></li>
        <li><Link to="school-statistics">School Statistics</Link></li>
        <li><Link to="deped-resources">DepEd Resources</Link></li>
        <li><Link to="facilities-support">Facilities & Support</Link></li>
        <li><Link to="org-docs">Organization Documents</Link></li>
        <li><Link to="admin-reports">Administrative Office Reports</Link></li>
      </ul>
    </nav>
    <Routes>
      <Route path="sdo-profile" element={<SDOProfile />} />
      <Route path="school-personnel" element={<SchoolPersonnel />} />
      <Route path="school-statistics" element={<SchoolStatistics />} />
      <Route path="deped-resources" element={<DepEdResources />} />
      <Route path="facilities-support" element={<FacilitiesSupport />} />
      <Route path="org-docs" element={<OrganizationDocs />} />
      <Route path="admin-reports" element={<AdminOfficeReports />} />
    </Routes>
  </div>
);

export default DataRepository;
