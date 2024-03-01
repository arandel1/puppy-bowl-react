import { useParams } from "react-router-dom";
import { useGetSinglePlayerQuery } from "../API/playersSlice";

export default function SinglePlayer() {
// useParams returns an object => so we are destructuring that object using the key defined in the <Route> element and creating a local variable in this component with the same thing
  
  const {id} = useParams();
  const { data, isLoading } = useGetSinglePlayerQuery(id);
  const player = data?.data?.player

  // id = random number generated in the <NavBar>
  
  return(
    <>
      {isLoading ? <p>Loading...</p> : 
        <div className="player-card">
          <h2>{player.name}</h2>
            <img src = {player.imageUrl} alt = "player image" />
            <p>Breed: {player.breed}</p>
            <p>Status: {player.status}</p>
            <p>Player ID: {player.id}</p>
        </div>} 
    </>
  );
}

// when we destructure something, we unpack values from arrays or properties from objects, into distinct variables
