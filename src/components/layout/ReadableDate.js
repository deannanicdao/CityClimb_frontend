import React from 'react'

const ReadableDate = (props) => {
    // console.log(props.date)
    const date = props.date 
    const year = props.year 

    let readableDate
    if(year == true){
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