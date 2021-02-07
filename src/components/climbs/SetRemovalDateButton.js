import { Button } from 'reactstrap'

// Clicking this button sets the removal date for 14 days from the current date
const SetRemovalDateButton = ( {climb} ) => {

    const API_ENDPOINT = "http://localhost:8000"
  let { _id, gym, colour } = climb
  const url = `${API_ENDPOINT}/climbs/${gym}/${colour}/${_id}`

  function handleClick() {

    // Corresponds to addRemovalDate in API's climb_controller.js file 
    fetch(`${url}`, {
        method: 'PATCH'
    }).then(res => res.json()).then((results) => console.log(results))
  }

  return (
    <Button onClick={handleClick}>Set 2 Week Removal Date</Button>
  );
}

export default SetRemovalDateButton

