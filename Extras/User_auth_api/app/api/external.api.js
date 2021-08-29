const axios = require('axios');

const bcrypt = require("bcryptjs");

async function getData(){
    try{
    var res = await axios('https://reqres.in/api/users')
    //console.log(res.data.data)
    return res.data.data

    }catch{
        console.log("err")
        //return null  not needed.
    }
    

}
// getData().then

async function parse_Api(){


    const api_list=[]
    const data = await getData()
    console.log(data.length, "this is the length of api data")

    for (let i=0 ;i<data.length;i++){
        const item = {
            username: data[i].first_name,
            email: data[i].email,
            password: bcrypt.hashSync(data[i].last_name,8)
        }

        api_list.push(item)

    }

    return api_list // [ {},{},{} ]


}



module.exports = parse_Api//getData