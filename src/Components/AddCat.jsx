import React, { useState,useEffect } from 'react'
import { Button, Modal, FloatingLabel, Form } from 'react-bootstrap'
import { addCat } from '../services/allApis';
import { ToastContainer, toast } from 'react-toastify';

function AddCat({ changeResState }) {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [category, setCategory] = useState({
    id: '', cName: '', Image: '', allProducts:[]
  })

  const handleCategorydetails = (e) => {
    const { name, value } = e.target
    setCategory({ ...category, [name]: value })
  }

  


  const addCategories = async () => {
    const { id, cName, Image } = category
    if (!id || !cName || !Image) {
      toast.warning("Please fill in the Category Details!!")
    }
    else {
      let response = await addCat(category)
      console.log(response)
      if (response.status >= 200 || response.status < 300) {
        setShow(false)
        changeResState()

        toast.success("Category added Successfully!!")
      }
      else {
        toast.error("Failed to Add!!")
      }
    }
  }

  console.log(category)
  return (
    <>
      <div onClick={handleShow}>
        <Button variant="outline-danger" size='lg' style={{ textAlign: 'center' }}> Add Category</Button>
        <img src="https://media2.giphy.com/media/fvNKxxgI7RuYpTol2H/200w.webp?cid=ecf05e47bvrxyq5e2zl2e6tupjzm7wpemrhzjfyq81chcwvt&ep=v1_gifs_related&rid=200w.webp&ct=s"  style={{height:'115px',width:'160px'}} alt="" />

      </div>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton >
          <Modal.Title style={{ fontFamily: 'Lobster', color: '#d92d20' }}>Add Category</Modal.Title>
        </Modal.Header>
        <Modal.Body>

          <FloatingLabel controlId="floatingId" label="Id" className="mb-3">
            <Form.Control type="text" placeholder="Id" name='id' onChange={(e) => handleCategorydetails(e)} />
          </FloatingLabel>
          <FloatingLabel controlId="floatingProductName" label="Category Name" className='mb-3'>
            <Form.Control type="text" placeholder="Category Name" name='cName' onChange={(e) => handleCategorydetails(e)} />
          </FloatingLabel>
          <FloatingLabel controlId="floatingPrice" label="ImageUrl" className='mb-3'>
            <Form.Control type="text" placeholder="Image Url" name='Image' onChange={(e) => handleCategorydetails(e)} />
          </FloatingLabel>

        </Modal.Body>
        <Modal.Footer>
          <Button style={{ backgroundColor: '#d92d20', color: 'white', letterSpacing: '2px' }} onClick={handleClose}>
            Close
          </Button>
          <Button style={{ backgroundColor: '#d92d20', color: 'white', letterSpacing: '2px' }} onClick={addCategories} >Add</Button>
        </Modal.Footer>
      </Modal>

    </>
  )
}

export default AddCat