import React from 'react';
import medical from '../data/medical.json';
import './MedicalList.css';

const MedicalList: React.FC = () => {
  return (
    <div className="card glass">
      <ul>
        {medical.map((m) => (
          <li key={m.id} className="medical-item">
            <strong>{m.name}</strong> – {m.address} (Phone: {m.phone})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MedicalList;
