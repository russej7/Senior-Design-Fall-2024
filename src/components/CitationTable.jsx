import React, { useEffect, useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { fetchCitations } from '../services/api';
import './CitationTable.css';
import PrintCitation from '../components/PrintCitation.jsx';



const CitationsTable = () => {
  const navigate = useNavigate();
  const [citations, setCitations] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [printTarget, setPrintTarget] = useState(null);
  const [readyToPrint, setReadyToPrint] = useState(false);
  const printRef = useRef();
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredCitations, setFilteredCitations] = useState(citations);
  const [currentPage, setCurrentPage] = useState(1);
  const recordsPerPage = 10;

  useEffect(() => {
    const loadCitations = async () => {
      setIsLoading(true);
      try {
        const data = await fetchCitations();
        setCitations(data);
        setError(null);
      } catch (error) {
        setError('Failed to fetch citations');
        console.error('Failed to fetch citations:', error);
      } finally {
        setIsLoading(false); 
      }
    
    }; 

    loadCitations();
  }, []);

  useEffect(() => {
    const query = searchQuery.toLowerCase().trim();

    const filtered = citations.filter((citation) => {
      const licensePlate = citation.licensePlateNumber?.toLowerCase() || '';
      const ownerName = `${citation.ownerFirstName || ''} ${citation.ownerLastName || ''}`.toLowerCase();
      const citationNum = String(citation.citationNumber || '');
      return licensePlate.includes(query) || ownerName.includes(query) || citationNum.includes(query)
    });

    setFilteredCitations(filtered);
    setCurrentPage(1); 
  }, [searchQuery, citations]);
  

  useEffect(() => {
    if (readyToPrint && printTarget) {
      const timeout = setTimeout(() => {
        window.print();
        setReadyToPrint(false);
      }, 100); // Wait for PrintCitation to render
      return () => clearTimeout(timeout);
    }
  }, [readyToPrint, printTarget]);

  const handleEdit = (id) => {
    navigate(`/edit/${id}`);
  };

  const handlePrint = (citation) => {
    setPrintTarget(citation);
    setReadyToPrint(true);
  };

  const indexOfLast = currentPage * recordsPerPage;
  const indexOfFirst = indexOfLast - recordsPerPage;
  const currentRecords = filteredCitations.slice(indexOfFirst, indexOfLast);
  const totalPages = Math.ceil(filteredCitations.length / recordsPerPage);

  if (isLoading) {
    return <p>Loading citations...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div>
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search by citation number, license plate, or owner name."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
       
        
        <button className="add-button" onClick={() => navigate('/citations/new')}>Add</button>
      </div>

      
        <table className="citation-table">
          <thead>
            <tr>
              <th>Citation</th>
              <th>Date</th>
              <th>License</th>
              <th>Violation</th>
              <th>Location</th>
              <th>Owner</th>
              <th>Officer</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {currentRecords.map((citation) => (
              <tr key={citation.citationID}>
                <td>{citation.citationNumber}</td>
                <td>{new Date(citation.citationDateTime).toLocaleDateString()}</td>
                <td>{citation.licensePlateNumber}</td>
                <td>{citation.Violation?.Description}</td>
                <td>{citation.citationLocation}</td>
                <td>{`${citation.ownerFirstName} ${citation.ownerLastName}`}</td>
                <td>{`${citation.Officer?.FirstName} ${citation.Officer?.LastName}`}</td>
                <td className="action-buttons">
                  <button className="edit-button" onClick={() => handleEdit(citation.citationID)}>Edit</button>
                  <button className="print-button" onClick={() => handlePrint(citation)}>Print</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Hidden printable citation content */}
        {printTarget && (
          <div id="print-section" ref={printRef}>
            <PrintCitation citation={printTarget} />
          </div>
        )}
        {filteredCitations.length > recordsPerPage && (
        <div className="pagination">
          <button className="pagination-buttons"
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
          >
            Prev
          </button>

          <span>
            Page {currentPage} of {totalPages}
          </span>

          <button className="pagination-buttons"
            onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
            disabled={currentPage === totalPages}
          >
            Next
          </button>
        </div>
      )}
      </div>
      );
  };

      export default CitationsTable;
