import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TransactionsList from './pages/TransactionsList';
import TransactionDetail from './pages/TransactionDetail';

const App: React.FC = () => {
  return (
    <Router basename="/wallet-app-test">
      <Routes>
        <Route path="/" element={<TransactionsList />} />
        <Route path="/detail/:id" element={<TransactionDetail />} />
      </Routes>
    </Router>
  );
};

export default App;
