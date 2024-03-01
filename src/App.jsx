import './App.css'
import AllPlayers from './components/AllPlayers'
import NavBar from './components/NavBar'
import SinglePlayer from './components/SinglePlayer'
import { Routes, Route } from 'react-router-dom'

function App() {

  return (
    <>
      <NavBar/>
      <h1>Welcome to Puppy Bowl!</h1>
      
      <Routes>
        {/* path: what is added to baseUrl, element: React componenet that is rendered */}
        <Route path= '/' element = {<AllPlayers />}></Route>
        <Route path= '/players/:id' element = {<SinglePlayer />}></Route>
      </Routes>

    </>
  );
}

export default App
