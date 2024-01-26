import React,{useState} from 'react'
import { Row,Col } from 'react-bootstrap'
import Category from '../Components/Category'
import AddCat from '../Components/AddCat'
import Add from '../Components/Add'
import { ToastContainer } from 'react-toastify'
// import { Link } from 'react-router-dom'


function Home({product}) {

  const [resState,setResState]=useState(false)
  const changeResState=()=>{
    setResState(true)
  }




  return (
    <div>
      <Row className='mx-5 mt-5 mb-5 p-5'>
        <Col md='2'>
         <Add  />
        </Col>
        <Col md='8'>
         <Category resState={resState}/>
        </Col>
        <Col md='2'>
         < AddCat changeResState={changeResState} product={product} />
        </Col>
      </Row>
      <ToastContainer/>


    </div>
  )
}

export default Home