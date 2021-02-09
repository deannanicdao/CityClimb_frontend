import { Button } from 'reactstrap'

// Clicking this button sets the removal date for 14 days from the current date
const SetRemovalDateButton = ( {climb} ) => {

  let { _id, gym, colour } = climb
  const url = `${process.env.REACT_APP_BACKEND_URL}/climbs/${gym}/${colour}/${_id}`

  function handleClick() {

    // Corresponds to addRemovalDate in API's climb_controller.js file 
    fetch(`${url}`, {
        method: 'PATCH'
    }).then(res => res.json()).then((results) => {(alert(`Climb will be automatically deleted on: ${new Date(results.removalDate).toLocaleDateString('en-GB', { year: 'numeric', month: 'long', day: 'numeric'})}`))})
  }

  return (
    <Button onClick={handleClick}>Set 2 Week Removal Date</Button>
  );
}

export default SetRemovalDateButton

