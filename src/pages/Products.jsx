import React,{useState,useEffect} from 'react'
import { Card,Button,Row} from 'react-bootstrap'
import { getProd,deleteProd } from '../services/allApis'
import { ToastContainer,toast } from 'react-toastify'
import { useLocation } from 'react-router-dom'


function Products() {

  const [allProd,setAllProd]=useState([])
  const catp=useLocation();

  const handleProductDelete=async(id)=>{
    const res=await deleteProd(id)
    console.log(res)
    if(res.status>=200 && res.status<300){
      toast.success("Product Removed")
      getProduct()
    }
    
  }

  const getProduct=async()=>{
    let res=await getProd()
    setAllProd(res.data)
   console.log(res.data)

  }


// console.log(key)

  useEffect(()=>{
    getProduct()
  },[])

  console.log(catp.state)

  return (
    <>

    <div className='container mt-4 mb-4'>

      <Row>
      <img src="https://media0.giphy.com/media/X7fal3ZYE3SDjegvPY/200w.webp?cid=ecf05e47ua0g1hb8og2ossnam7lh9h2yxa4pdg9dch0psm1f&ep=v1_gifs_related&rid=200w.webp&ct=g"  style={{height:'115px',width:'150px'}} alt="" />

    {
          
          allProd?.map((item)=>{
             if(item?.category === catp.state.selCat){
              return <Card style={{ width: '16rem',height:'350px' }} className='ms-3 mx-3'>
              <Card.Img variant="top" style={{height:'200px',width:'210px'}} className='ms-3 mx-3' src={item?.Iurl} />
              <Card.Body>
               <Card.Title className='text-center'>{item?.pName}</Card.Title>
               <Card.Text className='text-center'>{item?.price}</Card.Text>
               <Button variant="outline-danger" >Buy Now</Button>&nbsp;&nbsp;
               <Button variant="outline-danger" >Cart</Button>
               <span className='btn' onClick={()=>handleProductDelete(item?.id)}><i className="fa-solid fa-trash mt-2" style={{color:' #d92d20'}}></i></span>
             </Card.Body>
            </Card>
             }

            
            
 
})
         
        }
         
       </Row> 
      <ToastContainer/> 
      
    </div>
    </>
  )
}

export default Products