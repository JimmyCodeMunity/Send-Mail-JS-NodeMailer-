const nodeMailer = require('nodemailer')

const html = `
<h1>Email Testing by nodemailer</h1>
<p>Nodemailer is the best</p>

`;

async function main(){
    const transporter = nodeMailer.createTransport({
        host:'smtp.gmail.com',//if using google
        port:465,
        secure:true,
        auth:{
            user:'',//host username here-could be email
            pass:''//host password here
        }
    });

    const info = await transporter.sendMail({
        from:'',//sender email
        to:'',//receiveremail
        subject:'Testing Nodemailer',
        html:html //this is the defined body
    

    });

    console.log("Email sent successfully!!", info.messageId)
}




main()
.catch(e=>console.log(e));
