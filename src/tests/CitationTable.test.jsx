import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import CitationTable from '../components/CitationTable';
import { MemoryRouter } from 'react-router-dom';
import * as api from '../services/api';


jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => jest.fn(),
}));


jest.mock('../services/api', () => ({
  fetchCitations: jest.fn(),
}));

describe('CitationTable component', () => {
  const mockCitations = [
    {
      citationID: 1,
      citationDateTime: '2024-04-01T10:00:00Z',
      Officer: { FirstName: 'John' },
      Violation: { Description: 'No Parking' },
      citationLocation: 'Main St',
      ownerFirstName: 'Alice',
      ownerLastName: 'Smith',
      licensePlateNumber: 'ABC123'
    },
    {
      citationID: 2,
      citationDateTime: '2024-04-02T12:00:00Z',
      Officer: { FirstName: 'Mike' },
      Violation: { Description: 'Expired Meter' },
      citationLocation: '2nd Ave',
      ownerFirstName: 'Bob',
      ownerLastName: 'Jones',
      licensePlateNumber: 'XYZ789'
    }
  ];

  beforeEach(() => {
    api.fetchCitations.mockResolvedValue(mockCitations);
  });

  test('renders citation table with data', async () => {
    render(<CitationTable />, { wrapper: MemoryRouter });

    await waitFor(() => {
      expect(api.fetchCitations).toHaveBeenCalled();
    });

    expect(screen.getByText(/Citation ID/i)).toBeInTheDocument();
    expect(screen.getByText(/John/)).toBeInTheDocument();
    expect(screen.getByText(/Expired Meter/)).toBeInTheDocument();
    expect(screen.getByText(/Main St/)).toBeInTheDocument();
    expect(screen.getByText(/Bob Jones/)).toBeInTheDocument();
  });

  test('renders loading message when isLoading is true', async () => {
    api.fetchCitations.mockImplementation(() => new Promise(() => {})); 
    render(<CitationTable />, { wrapper: MemoryRouter });
    expect(screen.getByText(/Loading citations/i)).toBeInTheDocument();
  });

  test('renders error message on fetch failure', async () => {
    api.fetchCitations.mockRejectedValue(new Error('API error'));
    render(<CitationTable />, { wrapper: MemoryRouter });

    await waitFor(() => {
      expect(screen.getByText(/Error: Failed to fetch citations/i)).toBeInTheDocument();
    });
  });

  test('handles Edit button click', async () => {
    const user = userEvent.setup();
    render(<CitationTable />, { wrapper: MemoryRouter });

    await waitFor(() => {
      expect(screen.getAllByText(/Edit/i)[0]).toBeInTheDocument();
    });

    await user.click(screen.getAllByText(/Edit/i)[0]);
  
  });

  test('handles Print button click', async () => {
    const user = userEvent.setup();
    render(<CitationTable />, { wrapper: MemoryRouter });

    await waitFor(() => {
      expect(screen.getAllByText(/Print/i)[0]).toBeInTheDocument();
    });


    await user.click(screen.getAllByText(/Print/i)[0]);
  });
});
