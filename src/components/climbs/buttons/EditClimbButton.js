import { useHistory } from "react-router-dom"

const EditClimbButton = ( { gym, colour, climbId } ) => {
  let history = useHistory()
  function handleClick() {
    history.push(`/climbs/${gym}/${colour}/${climbId}/edit`)
  }

  return (
    <button type="button" onClick={handleClick} className="py-2 px-4  bg-purple-600 hover:bg-purple-700 focus:ring-purple-500 focus:ring-offset-purple-200 text-white w-6/6 transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
      Edit Climb
    </button>
  );
}

export default EditClimbButton

