import axios from "axios";

const url1 =  `http://oldwave-fastapi-backend.herokuapp.com`;
const url2 = `http://oldwave-spring-api.herokuapp.com`;

function getOptions(params = null) {
    return  {
        headers: { 
            'Accept': '*/*',
            'Access-Control-Allow-Origin' : '*',
            'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS',
        },
        params
      };
}

export async function getProduct(params){
    try{  
        const api1  =axios.get(`${url1}/api/product`, getOptions(params));
        // const api2 =axios.get(`${url2}/api/product`, getOptions(params))
        return a = await axios.all([api1, api1])
    }
    catch(e){
        console.log(e)
    }
}


export async function getProductById(code, seller = 'Ernesto Perez Frailejón Dev'){
    
    try{ 
        let url = url1;
        if(seller !== 'Ernesto Perez Frailejón Dev'){
            // url = url2
        }
        return await axios.get(`${url}/api/product/${code}/detail`, getOptions())
    } 
    catch(e){
        console.log(e)
    }
}