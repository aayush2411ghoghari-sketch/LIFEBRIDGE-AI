import React from 'react';
import Header from './components/Header';
import ShelterList from './components/ShelterList';
import RoadMap from './components/RoadMap';
import MedicalList from './components/MedicalList';
import SuppliesChecklist from './components/SuppliesChecklist';
import Alerts from './components/Alerts';

const App: React.FC = () => {
  return (
    <div className="app-container">
      <Header />
      <main className="main-content">
        <section>
          <h2>Shelters</h2>
          <ShelterList />
        </section>
        <section>
          <h2>Safe Roads</h2>
          <RoadMap />
        </section>
        <section>
          <h2>Medical Assistance</h2>
          <MedicalList />
        </section>
        <section>
          <h2>Emergency Supplies</h2>
          <SuppliesChecklist />
        </section>
        <section>
          <h2>Alerts</h2>
          <Alerts />
        </section>
      </main>
    </div>
  );
};

export default App;
