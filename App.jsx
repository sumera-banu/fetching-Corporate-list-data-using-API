import { useState } from 'react'
import { Routes,Route } from "react-router-dom";
import Register from './screens/register.jsx'
import Result from './screens/result.jsx'
import './App.css'
// import ApiComponent from './components/ApiComponent.jsx'
import '@fontsource/poppins';
import UserTable from './screens/UserTable.jsx';

function App() {
  return(
  <Routes>

    <Route path="/" element={<UserTable/>} />
    {/* <Route path="/register" element={<Register />} />
    <Route path="/result" element={<Result />} /> */}
</Routes>
)}

export default App
