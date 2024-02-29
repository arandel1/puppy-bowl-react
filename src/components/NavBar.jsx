import { Link } from "react-router-dom";
import AllPlayers from "./AllPlayers";
import SinglePlayer from "./SinglePlayer";


export default function NavBar() {
  // TO DO better - not generating new random numbers after we click

  const id = Math.floor(Math.random() * 5 + 1 );
  return(
    <>
      <h2>Nav Bar Component</h2>
      <Link to="/">All Players</Link>
      <br/>
      <Link to={`/players/${id}`}>Random Player</Link>
    </>
  );
}