import React from 'react'
import { Navbar,Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <div>
        <Navbar className='navbar'style={{backgroundColor:"#E7D3D3"}} data-bs-theme="dark">
        <Container style={{margin:'0px'}}>
        <Link to={'./'} style={{textDecoration:'none'}}> 
          <Navbar.Brand >
          {/* <i className="fa-solid fa-upload fa-bounce fa-l me-3" style={{color:'#223659;',fontSize:'30px'}}></i>
            {' '} */}
             {/* <span style={{fontSize:'30px',color:'white'}} >e<span style={{color:'#E595AD'}}>-mart</span></span> */}
             <img src="https://ebmbook.com/wp-content/uploads/2020/12/ebmbook-eshop.png" style={{height:'51px',width:'143px',paddingLeft:'8px'}} alt="" />
             <img src="https://www.rawshorts.com/freeicons/wp-content/uploads/2017/01/red_shoppictbasket_add_1484336516-1-548x548.png" style={{height:'51px',width:'70px',marginLeft:'850px'}} alt="" />
             {/* <span style={{fontSize:'20px',color:'#d92d20',marginLeft:'0px'}}>Cart</span> */}
             <img src="https://www.fit2work.com.au/assets/img/avatars/LoginIconAppl.png" style={{height:'34px',width:'45px',marginLeft:'37px'}} alt="" />
             {/* <span style={{color:'#d92d20',marginLeft:'0px'}}>Login</span> */}
             <button className='btn ' style={{backgroundColor:'#d92d20',marginLeft:'71px'}}>Sign Up</button>
             
          </Navbar.Brand>
          </Link>
        </Container>
      </Navbar>
    </div>
  )
}


export default Header