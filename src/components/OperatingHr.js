import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import ListGroup from 'react-bootstrap/ListGroup';
function OperatingHr({OperatingData}) {
    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div><Button variant="info" className='w-100 p-3' onClick={handleShow}>
    <b className='fs-5'>Operating Hours</b>
  </Button>

  <Modal show={show} onHide={handleClose}>
    <Modal.Header closeButton>
      <Modal.Title className='text-danger fw-3'>  <span className=' text-light'> Oper</span>ating  <span className='text-primary'>Ho</span>urs</Modal.Title>
    </Modal.Header> 
    <Modal.Body>  <ListGroup className=' text-danger me-5 pe-5 w-75 '>
      <ListGroup.Item  ><b className='text-warning '> Monday <span>{OperatingData.Monday}</span></b></ListGroup.Item>
      <ListGroup.Item ><b className='text-warning ' > Tuesday <span>{OperatingData.Tuesday}</span></b></ListGroup.Item>
      <ListGroup.Item ><b className='text-warning  ' > Wednesday <span>{OperatingData.Wednesday}</span></b></ListGroup.Item>
      <ListGroup.Item ><b className='text-warning  ' > Thursday <span>{OperatingData.Thursday}</span></b></ListGroup.Item>
      <ListGroup.Item ><b className='text-warning ' >Friday <span>{OperatingData.Friday}</span></b></ListGroup.Item>
      <ListGroup.Item ><b className='text-warning  ' > Saturday <span>{OperatingData.Saturday}</span></b></ListGroup.Item>
      <ListGroup.Item ><b className='text-warning  ' > Sunday <span>{OperatingData.Sunday}</span></b></ListGroup.Item>
      </ListGroup>
      </Modal.Body>
    <Modal.Footer>
      <Button variant="secondary" onClick={handleClose}>
        Close
      </Button>
      
    </Modal.Footer>
  </Modal>

</div>
  )
}

export default OperatingHr