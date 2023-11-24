const nodeMailer = require('nodemailer')

const html = `
<h1>Email Testing by nodemailer</h1>
<p>Nodemailer is the best</p>

`;

async function main(){
    const transporter = nodeMailer.createTransport({
        host:'smtp.gmail.com',
        port:465,
        secure:true,
        auth:{
            user:'ghostbmer@gmail.com',
            pass:'whfqcsjysphutdgo'
        }
    });

    const info = await transporter.sendMail({
        from:'ghostbmer@gmail.com',
        to:'collinsmuemah@gmail.com',
        subject:'Testing Nodemailer',
        html:html
    

    });

    console.log("Email sent successfully!!", info.messageId)
}




main()
.catch(e=>console.log(e));