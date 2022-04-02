import axios from "axios";

export async function getProduct(name, page, size) {
    try {
        const response = await axios.get('http://oldwave-spring-api.herokuapp.com/api/product', {
            params: {
                name,
                page,
                size
            }
        })
        return response
    }
    catch (e) {
        console.log(e)
    }
}

export async function getProductById(code){
    try{  
        var config = {
            method: 'get',
            url: `http://oldwave-spring-api.herokuapp.com/api/product/${code}/detail`,
            headers: { 
                'Accept': '/',
                'Access-Control-Allow-Origin' : '*',
                'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS',
            },
          };
          
        return await axios(config)
    }
    catch(e){
        console.log(e)
    }
}