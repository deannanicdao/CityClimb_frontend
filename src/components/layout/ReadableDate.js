import React from 'react'

const ReadableDate = (props) => {
    console.log(props.date)

    const date = new Date(props.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric'})

    
    return (
        <div>
        {date}
        </div>)
}

export default ReadableDate