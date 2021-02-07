import { Button } from 'reactstrap'

// Clicking this button sets the removal date for 14 days from the current date
// 
const SetRemovalDateButton = ( {climb} ) => {

    const API_ENDPOINT = "http://localhost:8000"
  let { _id, gym, colour } = climb
  const url = `${API_ENDPOINT}/climbs/${gym}/${colour}/${_id}`

  function handleClick() {

    // Sets the removal date for 14 days from the current date
    fetch(`${url}`, {
        method: 'PATCH'
    }).then(res => res.json()).then((results) => console.log(results))
  }

  return (
    <Button onClick={handleClick}>Set Removal</Button>
  );
}

export default SetRemovalDateButton

