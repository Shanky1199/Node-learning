const axios = require('axios');

async function getData(){
    try{
    var res = await axios('https://reqres.in/api/users')
    //console.log(res.data.data)
    return res.data.data

    }catch{
        console.log("err")
        return null 
    }
    

}

module.exports = getData
