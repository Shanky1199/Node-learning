const nodemailer = require('nodemailer')

const transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "3b315923408cbe",
      pass: "e9f7712cf3f991"
    }
  });

const sendMail= async (req,res)=>{

    message = {
        from: req.body.from,
        to: req.body.to,
        subject: req.body.subject,
        text: req.body.text
    }
    await transport.sendMail(message,(err, info)=>{
        if (err) {
            res.send({message:"Email sending error",error:err})
          } else {
            console.log(info);
          }   
 });
}


module.exports= sendMail






  /*
  var mailOptions = {
    from: 'youremail@gmail.com',
    to: 'myfriend@yahoo.com',
    subject: 'Sending Email using Node.js',
    text: 'That was easy!'
  };
  
  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });

  */