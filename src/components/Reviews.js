import React from 'react'
import Accordion from 'react-bootstrap/Accordion'
function Reviews( {reviews}) {
  return (
    <div><Accordion defaultActiveKey="0">
    <Accordion.Item eventKey="0">
      <Accordion.Header>Reviews</Accordion.Header>
      <Accordion.Body>
       {
        reviews?reviews.map(i=>(

<div>
            <p>Name : {i.name}</p>
            <p>Date : {i.date}</p>
            <p>Rating : {i.rating}</p>
            <p>Comments : {i.comments}</p>
         </div>

         )
         ):<h1>No reviews found</h1>


        
       }
      </Accordion.Body>
    </Accordion.Item>
    
    
  </Accordion></div>
  )
}

export default Reviews