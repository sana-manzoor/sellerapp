import React from 'react'
import { Row,Col } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { Card } from 'react-bootstrap'

function Landing() {

  const navigatebyUrl=useNavigate()
  const clickNavigate=()=>{
    navigatebyUrl('./home')
  }


  return (
    <div className='pt-3 pb-4'>
      <Row className='pt-5 align-items-center'>
        <Col>
        </Col>
        <Col md='4'>
        <h3 style={{color:'#D57C7C'}} className='mb-3'>Affordability at your  <span style={{fontSize:'60px',   fontFamily: 'Sevillana',color:'#d92d20'}}>Fingertips!!</span></h3>
        <p style={{textAlign:'justify'}}>we started a store to sell snowboards online. None of the ecommerce solutions at the time gave us the control we needed to be successful—so we built our own. Today, businesses of all sizes use E-Shop, whether they’re selling online, in retail stores, or on-the-go.</p><br />
        <button className='btn mb-4 text-light' style={{backgroundColor:'#d92d20',letterSpacing:'2px'}} onClick={clickNavigate}>Start Selling</button>

        </Col>
        <Col>
        </Col>
        <Col md='6'>
          <img className='img-fluid' style={{height:'370px',width:'400px',marginLeft:'60px'}} src="https://th.bing.com/th/id/OIP.2dI-zx4rZXnYKGv2bSgjBQAAAA?rs=1&pid=ImgDetMain" alt="" />
        </Col>

      </Row>


      <div className='mb-5 mt-5'>
        <h2 className='text-center mt-5 mb-3'  style={{overflowY:'hidden',fontFamily:'Kalnia',color:'#d92d20',fontWeight:'bold'}}>Features</h2>
        <div  className='d-flex mt-4 justify-content-evenly'>

        

    <Card style={{ width: '18rem' }} className='me-5 ms-5 border shadow'>
      <Card.Img variant="top" src="https://media.giphy.com/media/122xvcGTKEHSFi/giphy.gif" style={{height:'230px'}} />

      <Card.Body>
        <Card.Title style={{fontSize:'24px',fontFamily:'Sevillana',color:'#d92d20',textAlign:'center'}}>Ease of Doing Business</Card.Title>
        <Card.Text>
        Create your E-shop seller account in under 10 minutes with just 1 product and a valid GSTIN number.Anyone with basic knowledge can start create and contribute to the business.
        </Card.Text>
      </Card.Body>
    </Card>

    <Card style={{ width: '18rem' }} className='me-5 ms-5 border shadow'>
         <Card.Img variant="top" src="https://cdn.dribbble.com/users/408737/screenshots/1248644/media/70b5a28669ad3dbff944c8f6b9a690d3.gif" />
         <Card.Body>
        <Card.Title style={{fontSize:'23px',fontFamily:'Sevillana',color:'#d92d20',textAlign:'center'}}>Wide Oppurtunities</Card.Title>
        <Card.Text>
        45 crore+ of customers across 19000+ pincodes, and access to shopping festivals like The Big Billion Days, and more.Learn how you can have an impact by exploring opportunities at E-shop.Click to learn more.
        </Card.Text>
         </Card.Body>
       </Card>

    <Card style={{ width: '18rem' }} className='me-5 ms-5 border shadow'>
    <Card.Img variant="top" src="https://quixy.com/wp-content/uploads/2020/12/Customer-service-help-anim.gif" />
      <Card.Body>
        <Card.Title style={{fontSize:'23px',fontFamily:'Sevillana',color:'#d92d20',textAlign:'center'}}>Additional Support</Card.Title>
        <Card.Text>
        Get the help you want with 24/7 support before,during,and after.Account management services, exclusive training programs, business insights, catalogue/photoshoot support, and more.
        </Card.Text>
      </Card.Body>
    </Card>
        </div>

      </div>


      <div className='mb-5 mt-5'>
        <h2 className='text-center mt-5'  style={{overflowY:'hidden',fontFamily:'Kalnia',color:'#d92d20',fontWeight:'bold',marginBottom:'12px'}}>Brands we are working with</h2>
        <div className='container pt-5 pb-5'>
        <a href=""><span>  <img src="https://logos-world.net/wp-content/uploads/2020/04/Puma-Logo-700x394.png" alt="" style={{height:'130px',width:'150px'}} /></span>
        <span>  <img src="https://th.bing.com/th/id/OIP.U6QwUpLHLKTkLRcNYMFQugAAAA?w=401&h=401&rs=1&pid=ImgDetMain" alt=""  style={{height:'180px',width:'170px',marginLeft:'5px'}}/></span>
        <span>  <img src="https://th.bing.com/th/id/R.93f30978b06f43657edfb980e1a3459e?rik=kZp5rWBHrJWc0g&riu=http%3a%2f%2fpluspng.com%2fimg-png%2fsamsung-hd-png-samsung-logo-1000.jpg&ehk=zhoDBloOTla6lO8irUMtSwOnZjuiSJ0cbS%2b7fqb29cc%3d&risl=&pid=ImgRaw&r=0" alt=""  style={{height:'180px',width:'200px'}}/></span>
        <span>  <img src="https://logodownload.org/wp-content/uploads/2014/05/loreal-logo-0.png" alt=""  style={{height:'180px',width:'200px'}}/></span>
        <span>  <img src="https://logos-world.net/wp-content/uploads/2020/04/Louis-Vuitton-Logo.png" alt=""  style={{height:'180px',width:'170px'}}/></span>
        <span>  <img src="https://www.pngmart.com/files/22/Calvin-Klein-Logo-PNG-Photos.png" alt=""  style={{height:'180px',width:'170px'}}/></span>
        <span>  <img src="https://freepngimg.com/download/apple/58687-logo-computer-apple-icons-free-hd-image.png" alt=""  style={{height:'150px',width:'200px',paddingTop:'5px'}}/></span>
        <span>  <img src="https://th.bing.com/th/id/OIP.wtewv9Zv1eZb6qM4SxbeVgHaHa?rs=1&pid=ImgDetMain" alt=""  style={{height:'150px',width:'170px',paddingTop:'8px'}}/></span>
        <span>  <img src="https://wallpaperaccess.com/full/4657384.png" alt=""  style={{height:'130px',width:'160px',paddingTop:'8px'}}/></span>
        <span>  <img src="https://www.consumercomplaints.in/thumb.php?bname=1&src=pantaloons.png&wmax=900&hmax=900&quality=90&nocrop=1" alt=""  style={{height:'150px',width:'190px',paddingTop:'8px'}}/></span>
        <span>  <img src="https://logowik.com/content/uploads/images/maybelline-new-york3190.logowik.com.webp" alt=""  style={{height:'150px',width:'170px',paddingTop:'8px'}}/></span>
        <span>  <img src="https://static.vecteezy.com/system/resources/previews/020/336/445/original/woodland-logo-woodland-icon-free-free-vector.jpg" alt=""  style={{height:'190px',width:'190px',paddingTop:'8px'}}/></span>
        <span>  <img src="https://freepngimg.com/download/adidas/58136-logo-brand-adidas-sports-free-transparent-image-hd.png" alt=""  style={{height:'140px',width:'190px',paddingTop:'8px'}}/></span>
        <span>  <img src="https://i2.wp.com/www.imagesretailme.com/wp-content/uploads/2017/08/Max_Logo.png?fit=5828%2C2084" alt=""  style={{height:'90px',width:'190px',paddingTop:'8px',marginBottom:'6px'}}/></span></a>







          </div>
      </div>

    </div>
  )
}

export default Landing