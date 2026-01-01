"use server";

import nodemailer from "nodemailer";

export async function sendFormEmail(formData: FormData) {
  const topic = formData.get("topic");
  const first = formData.get("firstName");
  const last = formData.get("lastName");
  const email = formData.get("email");
  const phone = formData.get("phone");
  const message = formData.get("message");

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_APP_PASSWORD,
    },
  });

  await transporter.sendMail({
    from: `"Saha Contact Form" <${process.env.GMAIL_USER}>`,
    to: "satyamsaha.ca@gmail.com",
    replyTo: email?.toString(),
    subject: `[Contact Form]: New Query: ${topic}`,
    text: `
Topic: ${topic}
Name: ${first} ${last}
Email: ${email}
Phone: ${phone}

Message:
${message}
    `,
    html: `
      <div style="font-family: Arial, sans-serif; padding: 20px;">
        <h2>There is a new form submission:</h2>

        <p><strong>Topic:</strong> ${topic}</p>
        <p><strong>Name:</strong> ${first} ${last}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>

        <h3>Message:</h3>
        <p style="white-space: pre-wrap;">${message}</p>

        <hr />

        <footer style="margin-top: 20px; font-size: 12px; color: #666;">
          Sent from saha.co.nz contact form
        </footer>
      </div>
    `,
  });
}
