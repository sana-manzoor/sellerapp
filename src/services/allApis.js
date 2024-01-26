import { BASE_URL } from "./base_url";
import { commonRequest } from "./commonRequest";


//to add products
export const addProd=async (body)=>{
    return await commonRequest("POST",`${BASE_URL}/products`,body)
}

//to view products
export const getProd=async()=>{
    return await commonRequest("GET",`${BASE_URL}/products`,'')


}

//to add products
export const addCat=async (body)=>{
    return await commonRequest("POST",`${BASE_URL}/categories`,body)
}


//to view products
export const getCat=async()=>{
    return await commonRequest("GET",`${BASE_URL}/categories`,'')


}

//to delete category
export const deleteCateg=async(id)=>{
    return await commonRequest("DELETE",`${BASE_URL}/categories/${id}`,{})
}

//to delete Product
export const deleteProd=async(id)=>{
    return await commonRequest("DELETE",`${BASE_URL}/products/${id}`,{})
}

//to getcategory 
export const viewCat=async (body)=>{
    return await commonRequest("GET",`${BASE_URL}/categories`,body)
}

// to update category
export const updateCat=async (id,body)=>{
    return await commonRequest("PUT",`${BASE_URL}/categories/${id}`,body)
}

// to get specific category
export const getSpecificCategory=async(category)=>{
    return await commonRequest("GET",`${BASE_URL}/products/${category}`,'')
}
