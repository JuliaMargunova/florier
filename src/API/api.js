import axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: "http://florier-api.somee.com/",
           // http:florier-api.somee.com/api/api/Product/GetAllProducts
    //headers: { "API-KEY": "fb8ed0e9-a454-43dc-b4e2-340281dc3fc2"}
});


export const productsAPI = {
    // getProducts(currentPage, pageSize) {
    //     return instance.get(`users?page=${currentPage}&count=${pageSize}`).then(response => response.data)
    // }
   async getProducts() {
        //return await instance.get("api/api/Product/GetAllProducts")
        const response = await axios.get('http://florier-api.somee.com/api/api/Product/GetPopularProducts' )
        //const response = await axios.get('http://localhost:4762/api/Product/GetAllProducts' )
        return response;
    }
}