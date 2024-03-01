import { useCreatePlayerMutation, useGetPlayersQuery } from "../API/playersSlice";
import { useState } from "react";

export default function NewPlayerForm() {
  const [name, setName] = useState("");
  const [breed, setBreed] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  const [createPlayer, result] = useCreatePlayerMutation();

  const { data, isLoading, refetch }= useGetPlayersQuery();

async function handleSubmit(e) {
  e.preventDefault();
  await createPlayer({ name, breed, imageUrl });
  refetch();
}

  return(
    <>
    <div className="new-player-form">
        <h3>Add a New Player</h3>
          <form onSubmit={handleSubmit}>
            <label className="name">
              Name:
              <input
                type ="text"
                name = "player-name"
                id = "player-name"
                placeholder="Lucky"
                value = {name}
                onChange={(e) => setName(e.target.value)}
              />
            </label>
            <br/>
            <label className="breed">
              Breed:
            <input
                type ="text"
                name = "player-breed"
                id = "player-breed"
                placeholder="Dalmatian"
                value = {breed}
                onChange={(e) => setBreed(e.target.value)}

              />
            </label>
            <br/>
            <label className="image">
              Image:
            <input
                type ="text"
                name = "player-image"
                id = "player-image"
                placeholder="Paste Image URL here"
                value = {imageUrl}
                onChange={(e) => setImageUrl(e.target.value)}

              />
            </label>
            <br/>
            <br/>
            <button type = "submit">Submit</button>
          </form>
      </div>
    </>
  );
}