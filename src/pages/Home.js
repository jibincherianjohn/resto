import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Carousel from 'react-bootstrap/Carousel';
import { Link } from 'react-router-dom';
function Home() {

  const [restaurants, setRestarunt] = useState([])

  //function api call

  const getAllResturanr = async () => {

    const result = await axios.get('/restaurants.json')
    setRestarunt(result.data.restaurants);




  }
  useEffect(() => {
    getAllResturanr()
  }, [])

  console.log(restaurants);
  return (
    <div>
      <Carousel>
      <Carousel.Item>
       <img style={{width:"100%", height:"40%"}} src="https://i.postimg.cc/3JvNpRb4/l-intro-1674674335.jpg" alt="" />
        
      </Carousel.Item>
      <Carousel.Item>
        <img style={{width:"100%", height:"40%" }} src="https://i.postimg.cc/Pf8vb2C5/The-Most-Popular-Menu-Items-That-You-should-Consider-Adding-to-Your-Restaurant-Content-image1-min-10.webp" alt="" />
      </Carousel.Item>
      <Carousel.Item>
        <img style={{width:"100%", height:"40%" }} src="https://i.postimg.cc/zfs8qS8x/content9555.jpg" alt="" />
      </Carousel.Item>
    </Carousel>
      <Container>
        <Row>
          {
    
            restaurants.length > 0 ? restaurants.map(i =>
              <Col xs={12}sm={6} lg={4} md={6} >
                <Link to={`/view/${i.id}`} style={{textDecoration:"none"}}>
                  <Card   style={{ width: '18rem', height:"550px" }} className='m-4 '  >
                 
                    <Card.Img style={{height:"400px"}} className='mt-5'
                    
                    variant="top" src={i.photograph} />
                    <Card.Body>
                      <Card.Title className='text-center text-info' >{i.name}</Card.Title>
                      <Card.Text className='text-warning '>
      
                        <b>Addres</b>{i.address}
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Link>
    
    
              </Col>
    
            ) : <h1 className='text-danger'> No Data peresent</h1>
          }
    
        </Row>
      </Container>
    </div>
  )
}

export default Home