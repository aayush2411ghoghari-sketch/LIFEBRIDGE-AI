import React, { useState } from 'react';
import './SuppliesChecklist.css';

const defaultSupplies = [
  { id: 1, name: 'Water (2L per person)', needed: true },
  { id: 2, name: 'Non‑perishable food', needed: true },
  { id: 3, name: 'First‑aid kit', needed: true },
  { id: 4, name: 'Flashlight + batteries', needed: true },
  { id: 5, name: 'Battery powered radio', needed: true }
];

const SuppliesChecklist: React.FC = () => {
  const [items, setItems] = useState(defaultSupplies);

  const toggleItem = (id: number) => {
    setItems(prev =>
      prev.map(item =>
        item.id === id ? { ...item, needed: !item.needed } : item
      )
    );
  };

  return (
    <div className="card glass">
      <ul className="supply-list">
        {items.map(item => (
          <li key={item.id} className="supply-item" onClick={() => toggleItem(item.id)}>
            <input type="checkbox" checked={!item.needed} readOnly /> {item.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SuppliesChecklist;
