import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import CitationTable from '../components/CitationTable.jsx';
import './Citations.css';
import '../components/CitationTable.css';
import { fetchCitations } from '@services/api';

const Citations = () => {
  const [citations, setCitations] = useState([]);
  //const [searchQuery, setSearchQuery] = useState('');
  //const [filteredCitations, setFilteredCitations] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    const loadCitations = async () => {
      try {
        const data = await fetchCitations();
        setCitations(data);
      } catch (error) {
        console.error('Failed to fetch citations:', error);
      }
    };
    loadCitations();  // Fetch citations when the component mounts
  }, []);

  /*const loadCitations = async () => {
    try {
      const data = await fetchCitations();
      setCitations(data);
    } catch (error) {
      console.error('Failed to fetch citations:', error);
    }
  };*/

  /*const handleSearch = () => {
    const query = searchQuery.toLowerCase().trim();

    if (query === '') {
      setFilteredCitations(citations);
      return;
    }
  
    const filtered = citations.filter((citation) => {
      const plate = citation.licensePlateNumber?.toLowerCase() || '';
      const owner = `${citation.ownerFirstName || ''} ${citation.ownerLastName || ''}`.toLowerCase();
  
      return plate.includes(query) || owner.includes(query);
    });

    setFilteredCitations(filtered);
  

  };

  const handleClear = () => {
    setSearchQuery('');
    setFilteredCitations(citations);
  }
*/
  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };



  return (

    <div className="citations-page">
      <Navbar onLogout={handleLogout} />


      <h1 className="citations-header">Search Citations</h1>
      <div className="action-bar">
      
      </div>
      <CitationTable citations={citations} />



    </div>
  );
};

export default Citations;
/*const Citations = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  // Placeholder data for citations
  const placeholderCitations = [
    {
      id: 1,
      license_plate: 'ABC123',
      violation_type: 'Speeding',
      date: '2023-10-01',
      location: 'Main St',
      fine_amount: 100,
      status: 'unpaid',
    },
    {
      id: 2,
      license_plate: 'XYZ789',
      violation_type: 'Parking Violation',
      date: '2023-10-02',
      location: 'Broadway',
      fine_amount: 50,
      status: 'paid',
    },
  ];

  const handleSearch = () => {
    // Implement search functionality later
    console.log('Searching for:', searchQuery);
  };

  const handleLogout = () => {
    // Clear token from localStorage and redirect to login page
    localStorage.removeItem('token');
    navigate('/login');
  };
*/
/*
  return (
    <div className="citations-page">
      {/* Navigation Bar }
      <div >
      <Navbar onLogout={handleLogout} />
      
      </div>  
      {/* Citations Page Content }
      <h1 className="citations-header">Search Citations</h1>

      {/* Search Bar }
      <div className="search-container">
        <div className="search-bar">
          <input
          type="text"
          placeholder="Search by license plate, violation, etc..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
      </div>
    </div>

      {/* Citations Table }
      <CitationTable citations={placeholderCitations} />
    </div>
  );
};

export default Citations; 
*/