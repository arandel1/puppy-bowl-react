export default function NewPlayerForm() {
  return(
    <>
      <h3>Add a New Player</h3>
      <form>
        <label>
          Name:
          <input
            type ="text"
            name = "player-name"
            id = "player-name"
            placeholder="Lucky"
          />
        </label>
        <label>
          Breed:
        <input
            type ="text"
            name = "player-breed"
            id = "player-breed"
            placeholder="dalmatian"
          />
        </label>
        <label>
          Image:
        <input
            type ="text"
            name = "player-image"
            id = "player-image"
            placeholder="image"
          />
        </label>
        <br/>
        <br/>
        <button>Submit</button>
      </form>
    </>
  );
}