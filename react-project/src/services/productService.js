import axios from "axios"

export default class ProductService {
    getProducts() {
        return axios.get("http://Endpoint")
    }

    getByProductName(productName) {
        return axios.get("http://Endpoint?productName=" + productName)
    }
}