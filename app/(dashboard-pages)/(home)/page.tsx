'use client';
import Dashboard from '@/app/components/Dashboard';
import Sidebar from '@/app/components/Sidebar';
import React, { useState } from 'react';

const App: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false); // State to handle mobile sidebar toggle

  return <Dashboard />;
};

export default App;
