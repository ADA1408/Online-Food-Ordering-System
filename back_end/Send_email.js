const nodemailer = require('nodemailer');

async function email_OTP(email,otp){
  console.log(email);
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'a3kr.projectmail@gmail.com',
      pass: 'ongwlgvexzpmqezr'
    }
  });
  const mailOptions = {
    from: 'a3kr.projectmail@gmail.com',
    to: email,
    subject: 'Your One Time Password ',
    text: `Your OTP is ${otp}`
  };
  transporter.sendMail(mailOptions)
  .then((info)=>{
    return {info};
  })
  .catch((error)=>{
    console.error("Sorry");
  })
}
module.exports=email_OTP;