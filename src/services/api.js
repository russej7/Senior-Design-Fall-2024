
const baseUrl = 'http://localhost:5000/api/citations';

export const fetchCitations = async () => {
    const response = await fetch(baseUrl);
    if (!response.ok) {
        throw new Error('Failed to fetch citations');
    }
    return response.json();
};

export const fetchCitationById = async (id) => {
    const response = await fetch(`${baseUrl}/${id}`);
    if (!response.ok) {
        throw new Error('Failed to fetch citation');
    }
    return response.json();
};

export const saveCitation = async (citation, id) => {
  console.log('Saving citation:', citation);

    const response = await fetch(`${baseUrl}${id ? '/' + id : ''}`, {
        method: id ? 'PUT' : 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(citation)
        
    });
    if (!response.ok) {
        //throw new Error('Failed to save citation');
        const errorBody = await res.text();
        console.error('Save failed:', errorBody); 
        throw new Error('Failed to save citation');
    }
    return response.json();
};

export const getOfficers = async () => {
    const res = await fetch('http://localhost:5000/api/officers');
    if (!res.ok) throw new Error('Failed to fetch officers');
    return res.json();
  };
  
  export const getViolations = async () => {
    const res = await fetch('http://localhost:5000/api/violations');
    if (!res.ok) throw new Error('Failed to fetch violations');
    return res.json();
  };
  
  export const getDispositions = async () => {
    const res = await fetch('http://localhost:5000/api/dispositions');
    if (!res.ok) throw new Error('Failed to fetch dispositions');
    return res.json();
  };
  
  export const getMakes = async () => {
    const res = await fetch('http://localhost:5000/api/makes');
    if (!res.ok) throw new Error('Failed to fetch makes');
    return res.json();
  };
  
  export const getStates = async () => {
    const res = await fetch('http://localhost:5000/api/states');
    if (!res.ok) throw new Error('Failed to fetch states');
    return res.json();
  };
