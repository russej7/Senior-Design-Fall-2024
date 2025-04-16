import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import AddEditCitations from '../pages/AddEditCitations';
import { MemoryRouter } from 'react-router-dom';
import * as api from '../services/api';


jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => jest.fn(),
  useParams: () => ({ id: undefined })  
}));


jest.mock('../services/api', () => ({
  fetchCitationById: jest.fn(),
  saveCitation: jest.fn(),
  getOfficers: jest.fn(() => Promise.resolve([{ officerID: 1, BadgeNumber: '123', FirstName: 'Jane', LastName: 'Doe' }])),
  getViolations: jest.fn(() => Promise.resolve([{ violationID: 10, Description: 'Parking Overtime' }])),
  getDispositions: jest.fn(() => Promise.resolve([{ dispositionID: 2, Description: 'Unpaid' }])),
  getStates: jest.fn(() => Promise.resolve([{ stateID: 5, Description: 'Ohio' }])),
  getMakes: jest.fn(() => Promise.resolve([{ MakeID: 3, Description: 'Toyota' }]))
}));

describe('AddEditCitations Component', () => {
  test('renders Add Citation form and switches tabs', async () => {
    render(<AddEditCitations />, { wrapper: MemoryRouter });


    await waitFor(() => expect(api.getOfficers).toHaveBeenCalled());

    expect(screen.getByText(/Add Citation/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Citation #/i)).toBeInTheDocument();
    expect(screen.getByText(/Violation/i)).toBeInTheDocument();

    
    fireEvent.click(screen.getByText(/Disposition/i));
    expect(screen.getByLabelText(/Amount Paid/i)).toBeInTheDocument();

    
    fireEvent.click(screen.getByText(/Owner/i));
    expect(screen.getByLabelText(/First Name:/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Owner Postal Code/i)).toBeInTheDocument();
  });

  test('submits form with required fields', async () => {
    const saveMock = api.saveCitation.mockResolvedValue({ success: true });

    render(<AddEditCitations />, { wrapper: MemoryRouter });

    await waitFor(() => expect(api.getMakes).toHaveBeenCalled());

    fireEvent.change(screen.getByLabelText(/Citation #/i), { target: { value: '1001' } });
    fireEvent.change(screen.getByLabelText(/Date\/Time:/i), { target: { value: '2024-05-01T10:00' } });
    fireEvent.change(screen.getByLabelText(/Location/i), { target: { value: 'Main St' } });
    fireEvent.change(screen.getByLabelText(/Violation/i), { target: { value: '10' } });
    fireEvent.change(screen.getByLabelText(/Officer/i), { target: { value: '1' } });

    fireEvent.click(screen.getByText('Save'));

    await waitFor(() => {
      expect(saveMock).toHaveBeenCalledWith(
        expect.objectContaining({ citationNumber: '1001' }),
        undefined
      );
    });
  });
});
