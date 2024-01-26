import React from 'react'
import { Row,Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div>
      <div style={{height:'460px',width:'100%',backgroundColor:'#E7D3D3', overflowY:'hidden'}}>
      <Row className='p-5'>
        <Col md='4'>
        <span><img src="https://ebmbook.com/wp-content/uploads/2020/12/ebmbook-eshop.png" style={{height:'51px',width:'143px',marginLeft:'125px'}} alt="" /></span><br /><br />

        <p style={{textAlign:'justify',color:'#223659'}}>45 crore+ customers across India trust to be their number 1 online shopping destination. It is no surprise that more than a million sellers trust their products to be made available 24x7.The E-shop Group is one of India’s leading digital commerce entities and includes group companies. Launched in 2007, E-shop has enabled millions of consumers, sellers, merchants and small businesses to be a part of India’s e-commerce revolution. With a registered customer base of over 100 million, offering over 80 million</p>

        </Col>
        <Col md='4' className='d-flex flex-column text-center'>
          <h4  style={{overflowY:'hidden',marginTop:'20px'}}>Links</h4>
          <Link to={'./'} style={{textDecoration:'none',color:'#223659'}} className='pt-3 pb-2'>Landing Page</Link>
          <Link to={'./home'} style={{textDecoration:'none',color:'#223659'}}className='pt-3 pb-2'>Home Page</Link>
          <Link to={'./products'} style={{textDecoration:'none',color:'#223659'}} className='pt-3 pb-2'>Products</Link>

        </Col>
        <Col md='4' className='d-flex flex-column text-center'>
          <h4  style={{overflowY:'hidden',marginTop:'20px'}}>Guides</h4>
          <Link to={'https://react.dev/'} style={{textDecoration:'none',color:'#223659'}} className='pt-3 pb-2'> React</Link>
          <Link to={'https://react-bootstrap.github.io/'} style={{textDecoration:'none',color:'#223659'}}className='pt-3 pb-2'>React-Bootstrap</Link>
          <Link to={'https://fontawesome.com/'} style={{textDecoration:'none',color:'#223659'}} className='pt-3 pb-2'>Fontawesome</Link>

        </Col>
      <div>
        <br /><br />
       <p className='text-center' style={{color:'#223659'}}>Copyright © 2023 React Bootstrap. Built with Docusaurus.</p> 
    </div>
      </Row>
      </div>

    </div>
  )
}

export default Footer