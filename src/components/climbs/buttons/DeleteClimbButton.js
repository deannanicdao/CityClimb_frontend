import { confirmAlert } from 'react-confirm-alert'
import 'react-confirm-alert/src/react-confirm-alert.css'
import { useHistory } from "react-router-dom"


// Clicking this button deletes the climb and redirects back to the previous page
const DeleteClimbButton = ({ climb }) => {
    let history = useHistory()



    let { _id, gym, colour } = climb
    
    // Url for fetch request
    const url = `${process.env.REACT_APP_BACKEND_URL}/climbs/${gym}/${colour}/${_id}/edit`

    // connects to the delete route in climb_controller.js for backend API
    // After deleting provide a confirmation alert and redirect back to previous page  
    function removeClimb() {
        fetch(`${url}`, {
            method: 'DELETE'
        }).then(res => res.json()).then((results) => alert(`Deleted Climb: ${results.confirmation._id}`))

        history.goBack()
    }

    // Options for the imported confirmAlert package 
    const options = {
        title: 'Delete Climb?',
        message: 'Are you sure?',
        buttons: [
            {
                label: 'Delete',
                onClick: removeClimb
            },
            {
                label: 'Go Back',
                onClick: () => { }
            }
        ],
        closeOnEscape: true,
        closeOnClickOutside: true,
    }

    // When the button is clicked use confirmAlert to make sure the user doesn't delete on accident
    const handleClick = () => {
        confirmAlert(options)
    }

    return (
        <button type="submit" onClick={handleClick} className="py-2 px-4  bg-red-600 hover:bg-red-700 focus:ring-red-500 focus:ring-offset-red-200 text-white w-1/6 transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
            Delete Climb
        </button>
    );
}

export default DeleteClimbButton
