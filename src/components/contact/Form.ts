"use server";

import nodemailer from "nodemailer";
import { google } from "googleapis";

const oAuth2Client = new google.auth.OAuth2(
  process.env.GMAIL_CLIENT_ID,
  process.env.GMAIL_CLIENT_SECRET,
  "https://developers.google.com/oauthplayground"
);

oAuth2Client.setCredentials({
  refresh_token: process.env.GMAIL_REFRESH_TOKEN,
});

export async function sendFormEmail(formData: FormData) {
  const topic = formData.get("topic")?.toString() || "No topic";
  const first = formData.get("firstName")?.toString() || "No first name";
  const last = formData.get("lastName")?.toString() || "No last name";
  const email = formData.get("email")?.toString() || "No email";
  const phone = formData.get("phone")?.toString() || "No phone";
  const message = formData.get("message")?.toString() || "No message";

  try {
    const accessTokenResponse = await oAuth2Client.getAccessToken();

    if (!accessTokenResponse?.token) {
      throw new Error("Failed to retrieve access token");
    }

    const transporter = nodemailer.createTransport({
      service: "gmail", // Simplified - nodemailer handles the host/port
      auth: {
        type: "OAuth2",
        user: process.env.GMAIL_USER, // business@saha.co.nz
        clientId: process.env.GMAIL_CLIENT_ID,
        clientSecret: process.env.GMAIL_CLIENT_SECRET,
        refreshToken: process.env.GMAIL_REFRESH_TOKEN,
        accessToken: accessTokenResponse.token,
      },
    });

    await transporter.sendMail({
      from: `"Saha Contact Form" <${process.env.GMAIL_USER}>`,
      to: process.env.GMAIL_USER,
      replyTo: email,
      subject: `[Contact Form] New Query: ${topic}`,
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px;">
          <h2>New form submission</h2>
          <p><strong>Topic:</strong> ${topic}</p>
          <p><strong>Name:</strong> ${first} ${last}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone}</p>
          <h3>Message:</h3>
          <p style="white-space: pre-wrap;">${message}</p>
          <hr />
          <footer style="font-size: 12px; color: #666;">Sent from saha.co.nz contact form</footer>
        </div>
      `,
    });

    return { success: true };
  } catch (error) {
    console.error("Email sending error:", error);
    throw error;
  }
}
