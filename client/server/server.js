const express = require('express');
const router =express.Router();
const cors = require('cors');
const nodemailer =require("nodemailer");

const app = express();
app.use(cors({
    origin:"http://localhost:3000",
    credentials:true
}))

const cookieParser = require('cookie-parser');
app.use(cookieParser());
app.use(express.json());
app.use("/", router);
app.listen(8000, () => console.log("Server Running"));
console.log(process.env.EMAIL_USER);
console.log(process.env.EMAIL_PASS);

const contactEmail= nodemailer.createTransport({
    service:'gmail',
    auth:{
        user: "sana.habil@gmail.com",
        pass:"qqffshodsacotejg"
    },
});

contactEmail.verify((error)=>{
    if(error){
        console.log(error);
        } else {
        console.log("Ready To Send");
    }
});

router.post("/contact", (req, res)=>{
    const name =req.body.firstName + req.body.lastName;
    const email =req.body.email;
    const message = req.body.message;
    const phone =req.body.phone;
    const mail = {
        from :name ,
        to: "sana.habil@gmail.com",
        subject: "Contact Form Submission- Portfolio",
        html: `<p>Name: ${name}</p>
                <p>Email: ${email}</p>
                <p>Phone: ${phone}</p>
                <p>Message: ${message}</p>`,
    };
    contactEmail.sendMail(mail, (error) =>{
        if (error) {
            res.json(error);
            }else{ 
            res.json({ code: 200, status: "Message Sent"});
        }
    });
});


// require('./config/mongoose.config')
// require('./routes/coffee.routes')(app)
// require('./routes/image.routes')(app)
// require ('./routes/user.routes')(app)


