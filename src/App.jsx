import React from 'react'
import { useState } from 'react'
import './App.css'
import Home from '../pages/Home'
import BottomBar from '../components/BottomBar'
import AddSpentModal from '../components/AddSpentModal'

function App() {
  const [showModal, setShowModal] = useState(false);
  const [spents, setSpents] = useState([]);

  const handleAddSpent = (arr) => {
    setSpents([...spents, arr.newSpent]);
};

  const spentsLimit = 10000;

  const moneySpent = spents.reduce((acc, spent) => Number(acc) + Number(spent.amount), 0);
  const moneyRemaining = spentsLimit - moneySpent;

  return (
    <div>
      <Home spents={spents} money={[moneySpent, moneyRemaining]}></Home>
      <AddSpentModal showModal={showModal} setShowModal={setShowModal} handleAddSpent={handleAddSpent} moneyRemaining={moneyRemaining}></AddSpentModal>
      <BottomBar setShowModal={setShowModal}></BottomBar>
    </div>
  )
}

export default App
