import React from 'react'

// Takes in any format of date and turns it into human readable form
// year is an optional prop for when that additonal specificity is required 
const ReadableDate = ({ date, year }) => {

    let readableDate
    if(year){
        readableDate = new Date(date).toLocaleDateString('en-GB', { year: 'numeric', month: 'long', day: 'numeric'})
    } else {
        readableDate = new Date(date).toLocaleDateString('en-US', { month: 'long', day: 'numeric'})
    }

    
    return (
        <span>
        {readableDate}
        </span>)
}

export default ReadableDate