import React from 'react';
import shelters from '../data/shelters.json';
import './ShelterList.css';

const ShelterList: React.FC = () => {
  return (
    <div className="card glass">
      <ul>
        {shelters.map((s) => (
          <li key={s.id} className="shelter-item">
            <strong>{s.name}</strong> – {s.address} (Capacity: {s.capacity})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ShelterList;
