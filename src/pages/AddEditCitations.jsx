
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { fetchCitationById, saveCitation, getOfficers, getViolations, getDispositions, getStates, getMakes } from '../services/api';
import Navbar from '../components/Navbar';
import './AddEditCitations.css';

const AddEditCitations = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [tab, setTab] = useState('citation');

  const [citation, setCitation] = useState({
    citationNumber: '',
    citationDateTime: '',
    citationLocation: '',
    violationID: '',
    officerID: '',
    dispositionID: '',
    amtPaid: '',
    notes: '',
    ownerFirstName: '',
    ownerLastName: '',
    licensePlateNumber: '',
    MakeID: '',
    licensePlateStateID: '',
    ownerStateID: ''
  });

  const [dropdowns, setDropdowns] = useState({ officers: [], violations: [], dispositions: [], states: [], makes: [] });

  useEffect(() => {
    if (id) {
      fetchCitationById(id).then(setCitation);
    }
    Promise.all([getOfficers(), getViolations(), getDispositions(), getStates(), getMakes()])
      .then(([officers, violations, dispositions, states, makes]) => {
        setDropdowns({ officers, violations, dispositions, states, makes });
      });
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCitation(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const payload = { ...citation };
    if (!id) {
      delete payload.citationID;
    }
  
    try {
      await saveCitation(payload, id);
      navigate('/citations');
    } catch (error) {
      console.error('Save failed:', error);
      alert('Error saving citation. Check console for details.');
    }
  };

  const formattedDateTime = citation.citationDateTime
  ? new Date(citation.citationDateTime).toISOString().slice(0, 16)
  : '';


  return (

 
    <div className="add-edit-citations-page">
      <div>
      <Navbar />
      </div>
      <h2 className="add-edit-citations-header">{id ? 'Edit Citation' : 'Add Citation'}</h2>
      <div className="tabs">
        <button onClick={() => setTab('citation')}>Citation</button>
        <button onClick={() => setTab('disposition')}>Disposition</button>
        <button onClick={() => setTab('owner')}>Owner</button>
      </div>

      <form onSubmit={handleSubmit}>
        {tab === 'citation' && (
          <div>
            <label>Citation #: <input name="citationNumber" value={citation.citationNumber} onChange={handleChange} /></label>
            <label>Date/Time: <input type="datetime-local" name="citationDateTime" value={formattedDateTime} onChange={handleChange} /></label>
            <label>Location: <input name="citationLocation" value={citation.citationLocation} onChange={handleChange} /></label>
            <label>Violation: <select name="violationID" value={citation.violationID} onChange={handleChange}>
              <option value="">-- Select --</option>
              {dropdowns.violations.map(v => <option key={v.violationID} value={v.violationID}>{v.Description}</option>)}
            </select></label>
            <label>Officer: <select name="officerID" value={citation.officerID} onChange={handleChange}>
              <option value="">-- Select --</option>
              {dropdowns.officers.map(o => <option key={o.officerID} value={o.officerID}>{o.BadgeNumber} - {o.FirstName} {o.LastName}</option>)}
            </select></label>
          </div>
        )}

        {tab === 'disposition' && (
          <div>
            <label>Disposition: <select name="dispositionID" value={citation.dispositionID} onChange={handleChange}>
              <option value="">-- Select --</option>
              {dropdowns.dispositions.map(d => <option key={d.dispositionID} value={d.dispositionID}>{d.Description}</option>)}
            </select></label>
            <label>Amount Paid: <input name="amtPaid" value={citation.amtPaid} onChange={handleChange} /></label>
            <label>Notes: <textarea name="notes" value={citation.notes} onChange={handleChange} /></label>
          </div>
        )}

        {tab === 'owner' && (
          <div>
            <label>First Name: <input name="ownerFirstName" value={citation.ownerFirstName} onChange={handleChange} /></label>
            <label>Middle Name: <input name="ownerMiddleName" value={citation.ownerMiddleName} onChange={handleChange} /></label>
            <label>Last Name: <input name="ownerLastName" value={citation.ownerLastName} onChange={handleChange} /></label>
            <label>Plate #: <input name="licensePlateNumber" value={citation.licensePlateNumber} onChange={handleChange} /></label>
            <label>Make: <select name="MakeID" value={citation.MakeID} onChange={handleChange}>
              <option value="">-- Select --</option>
              {dropdowns.makes.map(m => <option key={m.MakeID} value={m.MakeID}>{m.Description}</option>)}
            </select></label>
            <label>Plate State: <select name="licensePlateStateID" value={citation.licensePlateStateID} onChange={handleChange}>
              <option value="">-- Select --</option>
              {dropdowns.states.map(s => <option key={s.stateID} value={s.stateID}>{s.Description}</option>)}
            </select></label>
            <label>Owner Address 1: <input name="ownerAddr1" value={citation.ownerAddr1} onChange={handleChange} /></label>
            <label>Owner Address 2: <input name="ownerAddr2" value={citation.ownerAddr2} onChange={handleChange} /></label>
            <label>Owner City: <input name="ownerCity" value={citation.ownerCity} onChange={handleChange} /></label>
            <label>Owner State: <select name="ownerStateID" value={citation.ownerStateID} onChange={handleChange}>
              <option value="">-- Select --</option>
              {dropdowns.states.map(s => <option key={s.stateID} value={s.stateID}>{s.Description}</option>)}
            </select></label>
            <label>Owner Postal Code: <input name="ownerPostalCode" value={citation.ownerPostalCode} onChange={handleChange} /></label>
          </div>
        )}

        <div style={{ marginTop: '1rem' }}>
          <button type="submit">Save</button>
          <button type="button" onClick={() => navigate('/citations')}>Cancel</button>
        </div>
      </form>
    </div>
   
  );
};

export default AddEditCitations;