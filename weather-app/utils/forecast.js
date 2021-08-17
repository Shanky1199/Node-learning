const request = require('request')

const forecast = (latitude,longitude,callback)=>{
const url = 'http://api.weatherstack.com/current?access_key=cfee875fc5cbee4502cb33888df81a87&query='+encodeURIComponent(latitude)+','+encodeURIComponent(longitude)+'&units=f'

request({url:url,json:true},(error,response) =>{
   // const data = JSON.parse(response.body)
    //console.log(data.current)
   // console.log(response.body.current)
   if(error){
       callback("unable to connect to the service",undefined)
   }
   else if(response.body.error){
       callback("unable to find the location"+response.body.error)
   }
   else{
    console.log(response.body.current.temperature)
    console.log(response.body.current)
   }

})
}

module.exports=forecast