const axios = require('axios');
const config = require("../config/auth.config");
const db = require("../models");
const { user: User, role: Role, refreshToken: RefreshToken } = db;



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
            password:bcrypt.hashSync(data[i].last_name,8),
            roles:['user']
        }

        api_list.push(item)

    }

    return api_list // [ {},{},{} ]
}

const external_signup = (req) => {
    const user = new User({
      username: req.username,
      email: req.email,
      password: bcrypt.hashSync(req.password, 8),
    });
  
    user.save((err, user) => {
      if (err) {
        //res.status(500).send({ message: err });
        console.log(err)
        return;
      }
  
      if (req.body.roles) {
        Role.find(
          {
            name: { $in: req.roles },
          },
          (err, roles) => {
            if (err) {
              //res.status(500).send({ message: err });
              console.log(err)
              return;
            }
  
            user.roles = roles.map((role) => role._id);
            user.save((err) => {
              if (err) {
                //res.status(500).send({ message: err });
                console.log(err)
                return;
              }
  
             // res.send({ message: "User was registered successfully!" });
             console.log('User was registered successfully')
            });
          }
        );
      } else {
        Role.findOne({ name: "user" }, (err, role) => {
          if (err) {
            //res.status(500).send({ message: err });
            console.log(err)
            return;
          }
  
          user.roles = [role._id];
          user.save((err) => {
            if (err) {
              //res.status(500).send({ message: err });
              console.log(err)
              return;
            }
  
            //res.send({ message: "User was registered successfully!" });
            console.log('User was registered successfuly')
          });
        });
      }
    });
  };

  const addAll=async ( )=>{

        var arr = await parse_Api()

        for (let i=0 ;i<arr.length;i++){
            external_signup(arr[i])

        }

        

  }



module.exports = parse_Api//getData