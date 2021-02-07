import { useHistory } from "react-router-dom"

const EditClimbButton = ( { gym, colour, climbId } ) => {
  let history = useHistory();
  function handleClick() {
    history.push(`/climbs/${gym}/${colour}/${climbId}/edit`);
  }

  return (
    <button type="button" onClick={handleClick}>
      Edit Climb
    </button>
  );
}

export default EditClimbButton

