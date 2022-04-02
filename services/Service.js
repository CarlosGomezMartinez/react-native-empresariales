import axios from "axios";

export async function getProduct({name, page, size}){
    try{  
        var config = {
            method: 'get',
            url: 'https://oldwave-fastapi-backend.herokuapp.com/api/product',
            headers: { 
                'Accept': '*/*',
                'Access-Control-Allow-Origin' : '*',
                'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS',
            },
            params: {
                name,
                page,
                size
            }
          };
          
        return await axios(config)
    }
    catch(e){
        console.log(e)
    }
}
