import { useState } from 'react'
import './App.css'
import Homepage from './components/Homepage';
import Loginpage from './components/Loginpage';
import Signuppage from './components/Signuppage';
import Navbar from './components/Reuse/Navbar';
import Table from './components/Reuse/Table';
import Folders from './components/Folders';
import { Tab } from '@headlessui/react';

function App() {
  
  return (
    <Folders />
  );
}

export default App
