import React from 'react';
import './PrintCitation.css';

const violationList = [
    { id: 1, description: 'NO CITY STICKER', amount: 25 },
    { id: 2, description: 'PARKING OVERTIME', amount: 25 },
    { id: 3, description: 'PARKING HANDICAPPED AREA', amount: 30 },
    { id: 4, description: 'PARKING PROHIBITED PLACE', amount: 25 },
    { id: 5, description: 'PARKING PROHIBITED TIME', amount: 25 },
    { id: 6, description: 'TRUCKS PARKING PROHIBITED TIME', amount: 25 },
    { id: 7, description: 'PARKING OVERTIME', amount: 25 },
    { id: 8, description: 'PARKING TOO NEAR CORNER', amount: 25 },
    { id: 9, description: 'RESIDENTIAL PARKING ONLY', amount: 25 },
    { id: 10, description: 'PARKING IMPROPERLY', amount: 25 },
    { id: 11, description: 'IMPROPER REGISTRATION', amount: 25 },
    { id: 12, description: 'PARKING HAZARD', amount: 25 },
    { id: 13, description: '72 HOUR PARKING', amount: 25 },
    { id: 14, description: 'PARKING DURING STREET CLEANING', amount: 25 },
    { id: 15, description: 'PARKING FIRE LANE', amount: 30 },
    { id: 16, description: 'FIRE PLUG', amount: 30 },
    { id: 17, description: 'MISC', amount: 25 },
    { id: 18, description: 'SPEEDING', amount: 0 },
    { id: 19, description: 'DTCD', amount: 0 },
    { id: 20, description: 'SEATBELT/CHILD RESTRAINT', amount: 0 },
    { id: 21, description: 'DISREGARDING STOP SIGN', amount: 0 },
    { id: 22, description: 'IMPROPER TURNING', amount: 0 },
    { id: 23, description: 'CARELESS DRIVING', amount: 0 },
    { id: 24, description: 'EQUIPMENT VIOLATION', amount: 0 },
];


const PrintCitation = React.forwardRef(({ citation }, ref) => {
    if (!citation) return null;

    return (
        <div ref={ref} className="print-citation">
            <h1 className="dept-header">DAYTON POLICE DEPARTMENT</h1>

            <div className="section-row">
                <div><strong>LICENSE #:</strong> {citation.licensePlateNumber}</div>
                <div><strong>STATE:</strong> {citation.licensePlateState?.Description}</div>
                
            </div>

            <div className="section-row">
                <div><strong>MAKE:</strong> {citation.Make?.Description}</div>
               
            </div>

            <div className="section-row">
                <div><strong>LOCATION:</strong> {citation.citationLocation}</div>
            </div>

            <div className="section-row">
                <div><strong>CITATION #:</strong> {citation.citationID}</div>
                <div><strong>DATE/TIME:</strong> {new Date(citation.citationDateTime).toLocaleString()}</div>
                <div><strong>TOWED:</strong> {citation.wasTowed ? 'Yes' : 'No'}</div>
            </div>

            <div className="section-row">
                <div><strong>OFFICER:</strong> {citation.Officer?.BadgeNumber}</div>
                <div><strong>RESIDENT:</strong> {citation.isResident ? 'Yes' : 'No'}</div>
            </div>

            <div className="section-row">
                <div className="warning-box">WARNING</div>
                <div className="payable-box">PAYABLE</div>
            </div>


            <p className="legal-note">
                It has been determined that a parking violation has been committed by the owner/operator of the above listed
                vehicle. This determination is deemed final if not paid or contested within seven (7) days after issuance...
            </p>

            <h4>VIOLATION OF TRAFFIC ORDINANCE INDICATED BELOW:</h4>

            <table className="violation-table">
                <thead>
                    <tr>
                        <th>✓</th>
                        <th>Violation</th>
                        <th>FINE AMT</th>
                        <th>7 DAYS</th>
                        <th>30 DAYS</th>
                    </tr>
                </thead>
                <tbody>
                    {[
                        { id: 1, description: 'NO CITY STICKER', amount: 25 },
                        { id: 2, description: 'PARKING OVERTIME', amount: 25 },
                        { id: 3, description: 'PARKING HANDICAPPED AREA', amount: 30 },
                        { id: 4, description: 'PARKING PROHIBITED PLACE', amount: 25 },
                        { id: 5, description: 'PARKING PROHIBITED TIME', amount: 25 },
                        { id: 6, description: 'TRUCKS PARKING PROHIBITED TIME', amount: 25 },
                        { id: 7, description: 'PARKING OVERTIME', amount: 25 },
                        { id: 8, description: 'PARKING TOO NEAR CORNER', amount: 25 },
                        { id: 9, description: 'RESIDENTIAL PARKING ONLY', amount: 25 },
                        { id: 10, description: 'PARKING IMPROPERLY', amount: 25 },
                        { id: 11, description: 'IMPROPER REGISTRATION', amount: 25 },
                        { id: 12, description: 'PARKING HAZARD', amount: 25 },
                        { id: 13, description: '72 HOUR PARKING', amount: 25 },
                        { id: 14, description: 'PARKING DURING STREET CLEANING', amount: 25 },
                        { id: 15, description: 'PARKING FIRE LANE', amount: 30 },
                        { id: 16, description: 'FIRE PLUG', amount: 30 },
                        { id: 17, description: 'MISC', amount: 25 },
                        { id: 18, description: 'SPEEDING', amount: 0 },
                        { id: 19, description: 'DTCD', amount: 0 },
                        { id: 20, description: 'SEATBELT/CHILD RESTRAINT', amount: 0 },
                        { id: 21, description: 'DISREGARDING STOP SIGN', amount: 0 },
                        { id: 22, description: 'IMPROPER TURNING', amount: 0 },
                        { id: 23, description: 'CARELESS DRIVING', amount: 0 },
                        { id: 24, description: 'EQUIPMENT VIOLATION', amount: 0 }
                    ].map((violation) => {
                        const isMatch = citation.violationID === violation.id;
                        const base = violation.amount.toFixed(2);
                        const day7 = (violation.amount * 2).toFixed(2);
                        const day30 = (violation.amount * 3).toFixed(2);

                        return (
                            <tr key={violation.id}>
                                <td style={{ textAlign: 'center' }}>{isMatch ? '✓' : ''}</td>
                                <td>{violation.description}</td>
                                <td>${base}</td>
                                <td>${day7}</td>
                                <td>${day30}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
});

export default PrintCitation;

