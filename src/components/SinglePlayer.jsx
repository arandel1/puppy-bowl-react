import { useParams } from "react-router-dom";

export default function SinglePlayer() {
// useParams returns an object => so we are destructuring that object using the key defined in the <Route> element and creating a local variable in this component with the same thing
  
  const {id} = useParams();
  // id = random number generated in the <NavBar>
  
  return(
    <>
      <h2>Single Player Component</h2>
      <h3>Player with id: {id} goes here</h3>
    </>
  );
}

// when we destructure something, we unpack values from arrays or properties from objects, into distinct variables
