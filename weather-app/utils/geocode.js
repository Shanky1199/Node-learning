const request = require('request')
const geocode =(address,callback)=>{
    const urlg ='https://api.mapbox.com/geocoding/v5/mapbox.places/'+encodeURIComponent(address)+'.json?access_token=pk.eyJ1Ijoic2hhbmt5MTE5OSIsImEiOiJja3NmbGFibW8xYjZnMnBtY2VubnYyNTdqIn0.pPE9IQBEH3G_qKfpwP_U6A'
    request({url:urlg,json:true},(error,response)=>{
    
        if(error){
            callback('Unable to do find the services',undefined)
    
        }else if(response.body.features.length==0){
           // console.log("unable to find the location")
            callback('unable to find the location',undefined)
        }
        else{
            callback(undefined,{
                location: response.body.features[0].place_name,
                latitude: response.body.features[0].center[1],
                longitude : response.body.features[0].center[0]

            })
        }
    })
}

module.exports = geocode