import sendgrid from "@sendgrid/mail";

sendgrid.setApiKey(process.env.NEXT_PUBLIC_SENDGRID_API_KEY);

async function sendEmail(req, res) {
  const { name, email, subject, message } = req.body;
  try {
    await sendgrid.send({
      to: "godnondsilva@gmail.com",
      from: "godnondsilva@gmail.com",
      subject: subject,
      html: `<h1>Message from ${name} (${email})</h1>
             <p>${message}</p>
            `,
    });
  } catch (error) {
    return res.status(error.statusCode || 500).json({ error: error });
  }
  return res.status(200).json({ error: "" });
}

export default sendEmail;