import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Citations from './pages/Citations';
import AddEditCitations from './pages/AddEditCitations';

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/citations" element={<Citations />} />
        <Route path="/edit/:id" element={<AddEditCitations />} />
        <Route path="/citations/new" element={<AddEditCitations />} />
      </Routes>
    </Router>
  );
}

export default App
