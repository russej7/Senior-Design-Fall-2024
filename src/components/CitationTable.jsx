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
        setIsLoading(false); // Ensure loading is set to false after fetch
      }
    };

    loadCitations();
  }, []);

 

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

  if (isLoading) {
    return <p>Loading citations...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

    return (
      <div>
        <table className="citation-table">
          <thead>
            <tr>
              <th>Citation ID</th>
              <th>Date/Time</th>
              <th>Officer ID</th>
              <th>Violation ID</th>
              <th>Location</th>
              <th>Owner Name</th>
              <th>License Plate</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {citations.map((citation) => (
              <tr key={citation.citationID}>
                <td>{citation.citationID}</td>
                <td>{new Date(citation.citationDateTime).toLocaleDateString()}</td>
                <td>{citation.Officer?.FirstName}</td>
                <td>{citation.Violation?.Description}</td>
                <td>{citation.citationLocation}</td>
                <td>{`${citation.ownerFirstName} ${citation.ownerLastName}`}</td>
                <td>{citation.licensePlateNumber}</td>
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
        <div id="print-section"  ref={printRef}>
          <PrintCitation citation={printTarget} />
        </div>
          )}
        
      </div>
    );
  };

  export default CitationsTable;
