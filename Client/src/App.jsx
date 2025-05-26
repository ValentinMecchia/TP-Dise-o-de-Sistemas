import React from 'react'
import ReacDOM from 'react-dom/client'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Home from '../pages/Home'
import BottomBar from '../components/BottomBar'
import AddSpentModal from '../components/AddSpentModal'
import History from '../pages/History'
import Charts from '../pages/Charts'
import Settings from '../pages/Settings'

function App() {
  const [showModal, setShowModal] = useState(false);
  const [spents, setSpents] = useState([]);
  const [spentsLimit, setSpentsLimit] = useState(localStorage.getItem('limitAmount') || 10000);

  useEffect(() => {
    const fetchSpents = async () => {
      try {
        const response = await axios.get("http://localhost:3001/api/spents");
        setSpents(response.data);
      } catch (error) {
        console.error("Error fetching spents:", error);
        setSpents([]);
      }
    };
    fetchSpents();
  }
  , []);

  const addSpent = (newSpent) => {
    axios.post("http://localhost:3001/api/spents", newSpent)
      .then((response) => {
        console.log("Gasto agregado:", response.data);
        setSpents([...spents, response.data]);
      })
      .catch((error) => {
        console.error("Error al agregar el gasto:", error);
      });
  };

  const moneySpent = spents.reduce((acc, spent) => Number(acc) + Number(spent.amount), 0);
  const moneyRemaining = spentsLimit - moneySpent;

  return (
    <Router>
      <div className="app-container">
        <Routes>
          <Route path="/" element={<Home spents={spents} money={[moneySpent, moneyRemaining]}></Home>} />
          <Route path="/history" element={<History spents={spents}></History>}></Route>
          <Route path="/charts" element={<Charts spents={spents}></Charts>}></Route>
          <Route path="/settings" element={<Settings setSpentsLimit={setSpentsLimit}></Settings>}></Route>
        </Routes>
        <AddSpentModal showModal={showModal} addSpent={addSpent} moneyRemaining={moneyRemaining} setShowModal={setShowModal}></AddSpentModal>
        <BottomBar setShowModal={setShowModal}/>
      </div>
    </Router>
  )
}

export default App
