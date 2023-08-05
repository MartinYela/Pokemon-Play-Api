import nodeMailer from 'nodemailer';

export const transporter = nodeMailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true, 
    auth: {
      user: 'appfotograph@gmail.com', // generated ethereal user
      pass: 'cmxnyuyuehfsjpnk', // generated ethereal password
    },
  });

  transporter.verify().then(()=> {
      console.log('Ready for send emails');
  });
  