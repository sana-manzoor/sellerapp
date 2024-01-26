import React,{useState,useEffect} from 'react'
import { Modal,Button,Form,FloatingLabel } from 'react-bootstrap'
import { addProd } from '../services/allApis';
import { ToastContainer,toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { viewCat } from '../services/allApis';

function Add() {

  const [show, setShow] = useState(false);

  const [viewCategory,setViewCategory]=useState([])

  const handleClose = () => setShow(false);
  const handleShow = () => {
    setShow(true)
    viewCategoryDet()
  }

  const [product,setProduct]=useState({
    id:'',pName:'',price:'',Iurl:'',category:''
})

const handleProductDetails=(e)=>{
  
  const {name,value}=e.target
  // console.log(name,value)
  setProduct({...product,[name]:value})
}

const viewCategoryDet=async()=>{
  let res2=await viewCat()
  setViewCategory(res2.data)
 console.log(res2.data)

}



useEffect(()=>{
  viewCategoryDet()
},[])




const addProducts=async()=>{

  const {id,pName,price,Iurl}=product
  if(!id || !pName || !price || !Iurl){
    toast.warning("Please fill in the Product Details!!")
  }
  else{
    let response=await addProd(product)
    console.log(response)
    if(response.status >=200 || response.status<300){
      // changeResState()
      // setShow(false)
      toast.success("Product added Successfully!!")
    }
    else{
      toast.error("Failed to Add!!")
    }
  }
}



console.log(product)
  return (
    <>
    <div onClick={handleShow} >
      {/* <span className='btn '><i className="fa-sharp fa-regular fa-plus fa-flip " style={{color: '#d52815',fontSize:'29px'}}></i></span> */}
      <img src="https://media3.giphy.com/media/HEeUqpqEF2DK6idfEC/giphy.webp?cid=ecf05e47n4pt5z3rtqj46yoecffq35ulxrlyaxwtyep5jbw3&ep=v1_stickers_search&rid=giphy.webp&ct=ts"  style={{height:'135px',width:'110px'}} alt="" />
      <br />
      {/* <span className='btn'><img src="https://th.bing.com/th/id/OIP.80DzEVZaGWHfFhrxGX8wBgHaHa?rs=1&pid=ImgDetMain" style={{height:'65px',width:'67px'}} alt="" /></span> */}
    </div>

    <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton >
          <Modal.Title style={{fontFamily:'Lobster',color:'#d92d20'}}>Add Product Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>

        <FloatingLabel controlId="floatingId" label="Product Id" className="mb-3">
        <Form.Control type="text" placeholder="Product Id" name='id' onChange={(e)=>handleProductDetails(e)} />
      </FloatingLabel>
      <FloatingLabel controlId="floatingProductName" label="Product Name" className='mb-3'>
        <Form.Control type="text" placeholder="Product Name" name='pName' onChange={(e)=>handleProductDetails(e)}/>
      </FloatingLabel>
      <FloatingLabel controlId="floatingPrice" label="Price" className='mb-3'>
        <Form.Control type="text" placeholder="Price" name='price' onChange={(e)=>handleProductDetails(e)} />
      </FloatingLabel>
      <FloatingLabel controlId="floatingImageUrl" label="Image Url" className='mb-3'>
        <Form.Control type="text" placeholder=" Image Url" name='Iurl' onChange={(e)=>handleProductDetails(e)}  />
      </FloatingLabel>
      <FloatingLabel controlId="floatingImageUrl" className='mb-3'>
      <Form.Select aria-label="Default select example" name="category" onChange={(e)=>handleProductDetails(e)}  >
      <option selected disabled hidden>Categories</option>

        {
          viewCategory?.map((item)=>(
            <option key={item?.id}>{item?.cName}</option>
 
          ))
         
        }  


     
    </Form.Select>
    </FloatingLabel>


        </Modal.Body>
        <Modal.Footer>
          <Button style={{backgroundColor:'#d92d20',color:'white',letterSpacing:'2px'}} onClick={handleClose}>
            Close
          </Button>
          <Button style={{backgroundColor:'#d92d20',color:'white',letterSpacing:'2px'}} onClick={addProducts}>Add</Button>
        </Modal.Footer>
      </Modal>

    </>

  )
}

export default Add