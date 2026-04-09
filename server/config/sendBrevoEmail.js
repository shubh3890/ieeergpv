const SibApiV3Sdk = require("sib-api-v3-sdk");
const client = SibApiV3Sdk.ApiClient.instance;
const apiKey = client.authentications["api-key"];

apiKey.apiKey = process.env.BREVO_API_KEY;
const tranEmailApi = new SibApiV3Sdk.TransactionalEmailsApi();
const sendRegistrationEmail = async (email, name,event) => {
  const whatsappLink = "https://chat.whatsapp.com/KVfacG3JTdO2yo2srJL4al";
  return tranEmailApi.sendTransacEmail({
    sender: {
      email: "ieeestb1146@gmail.com",
      name: "IEEE RGPV"
    },
    to: [{ email, name }],
    subject: `Registration Confirmed | IEEE RGPV's ${event}`,
    // htmlContent: `
    //   <h2>Hi ${name} 👋</h2>
    //   <p>Your registration was successful.</p>
    //   <p>Welcome to <b>IEEE RGPV join whhhatsapp = >>>>>>>>>>>>>>>>></b> 🚀</p>
    // `
    htmlContent: `
      <div style="
        font-family: Arial, Helvetica, sans-serif;
        background-color:#F8FAFF;
        padding:30px;
        color:#1F2937;
      ">

        <div style="
          max-width:600px;
          margin:auto;
          background:#ffffff;
          padding:30px;
          border-radius:10px;
          border:1px solid #E5E7EB;
        ">

          <h2 style="color:#0B5ED7; margin-bottom:10px;">
            Registration Successful 🎉
          </h2>

          <p style="font-size:15px;">
            Dear <strong>${name}</strong>,
          </p>

          <p style="font-size:15px; color:#374151;">
            Thank you for registering for the <strong> ${event}</strong>.
            We are happy to confirm that your registration has been
            <strong>successfully completed</strong>.
          </p>

          <p style="font-size:15px; color:#374151;">
            For all further updates, announcements, and event-related
            information, please join our official WhatsApp group using the
            button below:
          </p>

          <div style="text-align:center; margin:25px 0;">
            <a href="${whatsappLink}"
               style="
                 background:#0B5ED7;
                 color:#ffffff;
                 padding:12px 22px;
                 text-decoration:none;
                 border-radius:6px;
                 font-weight:600;
                 display:inline-block;
               ">
              Join WhatsApp Group
            </a>
          </div>

          <p style="font-size:14px; color:#6B7280;">
            ⚠️ Please make sure you join the group, as all important
            communications will be shared there.
          </p>

          <br/>

          <p style="font-size:14px;">
            Regards,<br/>
            <strong>Shubh Agrawal</strong><br/>
            <strong>IEEE RGPV Student Branch</strong><br/>
            <span style="color:#6B7280;">ieeestb1146@gmail.com</span>
          </p>

          <hr style="margin-top:30px; border:none; border-top:1px solid #E5E7EB;" />

          <p style="font-size:12px; color:#9CA3AF;">
            This is an automated message. Please do not reply to this email.
          </p>

        </div>
      </div>
    `
  });
};

module.exports = sendRegistrationEmail;