import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import { useEffect, useState } from 'react';
import Meal from './components/Header/Meal/Meal';


function App() {
  const [meals,setMeals] =useState([])
  useEffect( ()=>{
    fetch('data.json')
    .then(res=>res.json())
    .then(data=>setMeals(data))
  },[])

  return (
    <div className="App">
      <Header></Header>
      {
        meals.map(meal=><Meal key={meal.id} meal={meal}></Meal>)
      }
    </div>
  );
}

export default App;
