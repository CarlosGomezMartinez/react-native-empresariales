import axios from "axios";

export async function getProduct(name, page, size){
    try{
        const response = await axios.get('http://oldwave-spring-api.herokuapp.com/api/product', {
            params: {
                name,
                page,
                size
            }
        })
        return response    
    }
    catch(e){
        console.log(e)
    }
}
