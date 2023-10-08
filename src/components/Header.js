import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
function Header() {
  return (
    <div>
    <Navbar className="bg-body-tertiary">
        <Container>
          <Navbar.Brand >
            <img
              alt=""
              src="https://i.postimg.cc/g2xwgsJJ/pizzeria-fast-food-logo-or-label-happy-chef-holding-pizza-and-scapula-in-hands-vector-illustration-P.jpg"
              width="100"
              height="100"
              className="d-inline-block align-top"
            />{' '}
           <Link to={'/'} style={{textDecoration:"none"}}    ><b className=' mt-1 fs-5 fw-4 me-5'>    Fin<span className='text-danger mt-2' >Dai</span></b></Link>
          </Navbar.Brand>
        </Container>
      </Navbar>
       

    </div>
  )
}

export default Header