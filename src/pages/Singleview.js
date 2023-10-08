import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import { Link, useParams } from 'react-router-dom'
import ListGroup from 'react-bootstrap/ListGroup';
import OperatingHr from '../components/OperatingHr';
import Reviews from '../components/Reviews';
import './Single.css'
function Singleview() {
  
  const param=useParams()

  //destructuring-when key and varabile have same name
    var{id}=param                  //var id=param.id

const[allRestaruants,Setrsto]=useState([])

const getAllRe=async()=>{
  
const havic=await axios.get('/restaurants.json')
Setrsto(havic.data.restaurants)

}

  useEffect(()=>{
    getAllRe()


  },[])
  // console.log(id);
  // console.log(allRestaruants);

//find single view

const singleRest=allRestaruants.find(i=>i.id==id)
console.log(singleRest);
  
  return (
    <div className='container'>
        {/* ms-5 mt-5 mb-5 jk    me-5 pe-5  fs-4 k */}
    {
      singleRest?
      <Row className='hg'>
    
       <Col lg={6} md={12}  className=' ' >  
       <Link to={'/'} > <img className=' mt-5' style={{height:"400px ", width:"100%"}} src={singleRest.photograph} alt="" /></Link>
        </Col>

        <Col lg={6} md={12}  className='text-start  '>
        <h1 className=' mx-1 mt-2 text-info'>{singleRest.name}</h1>
        <ListGroup className=' text-danger'>
      <ListGroup.Item  className='  mt-4'><b className='text-warning me-5'> Address : <span>{singleRest.address}</span></b></ListGroup.Item>
      <ListGroup.Item className='  mt-4'><b className='text-warning ' > Neighbor : <span>{singleRest.neighborhood}</span></b></ListGroup.Item>
      <ListGroup.Item className='  mt-4'><b className='text-warning me-5 ' >Cusine : <span>{singleRest.cuisine_type}</span></b></ListGroup.Item>
      <ListGroup.Item className='mt-4 text-warning' > 
        <OperatingHr    OperatingData={singleRest.operating_hours} ></OperatingHr>
         </ListGroup.Item>
      <ListGroup.Item className='text-warning mt-4' >   
        <Reviews   reviews={singleRest.reviews}  ></Reviews>
         </ListGroup.Item>
    
    </ListGroup>
        </Col>



      </Row>:
      <Row>

        <h1>no data </h1>
      </Row>

    }    
      


    </div>
  )
}

export default Singleview