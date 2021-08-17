const request = require('request')
const geocode = require('./utils/geocode')
const forecast= require('./utils/forecast')

const address = process.argv[2]
if(!address){
    console.log('please provide an address')
}
else{
geocode(address,(error,data)=>{
    if(error){
        console.log(error)
    }
    console.log('error',error)
    console.log('data',data)
    forecast(data.latitude,data.longitude, (error, forecastdata) => {
        if(error){
            console.log(error)
        }
        console.log(data.location)
        console.log(forecastdata)
      })

    

})
}
