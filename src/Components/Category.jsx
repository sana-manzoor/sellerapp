import React,{useState,useEffect} from 'react'
import { Card,Button,Row } from 'react-bootstrap'
 import { useNavigate } from 'react-router-dom'
import { getCat,getProd } from '../services/allApis'
import { deleteCateg } from '../services/allApis'
import { ToastContainer,toast } from 'react-toastify'

function Category({resState}) {


  

  const [allCat,setAllCat]=useState([])
  const [selCat,setSelCat]=useState()
 
  const handleCategoryDelete=async(id)=>{
    const res=await deleteCateg(id)
    console.log(res)
    if(res.status>=200 && res.status<300){
      toast.success("Category Removed")
     getCategory()
    }
   


  }

  const onmouseover=(e,cName)=>{
      // e.preventDefault()
    console.log("Target Category name:",cName)
    const categoryName=cName
    setSelCat(categoryName)
    console.log(categoryName)
    // let filteredProducts = allCat.filter(product => product.category ===  'categoryName');
    // console.log(filteredProducts)

  }

       
  const getCategory=async()=>{
    let res2=await getCat()
    setAllCat(res2.data)
    console.log(res2.data)
  }


  const catg=selCat
  const navigatebyUrl=useNavigate()
  const clickNavigate=()=>{
    navigatebyUrl('/products' , {state : {selCat : selCat}})
  }

  useEffect(()=>{
    getCategory()
  },[resState])


console.log(selCat)

  return (
    <div>


   <Row>
    {
          allCat?.map((item)=>(
            <Card style={{ width: '15rem',borderColor:'white' }}  >
            <Card.Img variant="top" src={item?.Image} style={{height:'130px',width:'160px'}} />
           <Card.Body>
            <Card.Title style={{textAlign:'center'}}>{item?.cName}</Card.Title>
          <div>
            <Button variant="outline-danger" onMouseOver={(e)=>onmouseover(e,item?.cName)} onClick={clickNavigate} onChange={(e)=>setSelCat(e.target.value)}  key={item.category}>

             View Products
              </Button>
            <span className='btn mt-1' onClick={()=>handleCategoryDelete(item?.id)}><i className="fa-solid fa-trash" style={{color:' #d92d20'}}></i></span>
            </div>
              
        </Card.Body>
        </Card>

          ))
         
        } 
        
       </Row>
    </div>
  )
}


export default Category
