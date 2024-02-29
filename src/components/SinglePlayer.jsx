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
      <h2>Single Player Component</h2>
      {isLoading ? <p>Loading...</p> : 
        <div>
          <h3>{player.name}</h3>
          <h4>{player.breed}</h4>
          //TODO expand to show player details
        </div>} 
    </>
  );
}

// when we destructure something, we unpack values from arrays or properties from objects, into distinct variables
