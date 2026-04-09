import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

const RECIPIENT_EMAILS = [
  "info@zeneats.co.in",
  "bd1@zeneats.co.in",
  "kunalshah@zeneats.co.in",
  "denillalan@zeneats.co.in",
  "harshilshah@zeneats.co.in",
];

export async function POST(req: NextRequest) {
  try {
    const { name, email, phone, subject, message } = await req.json();

    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: "Name, email, subject, and message are required." },
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT) || 587,
      secure: Number(process.env.SMTP_PORT) === 465,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    await transporter.sendMail({
      from: `"ZenEats Website" <${process.env.SMTP_USER}>`,
      to: RECIPIENT_EMAILS.join(", "),
      replyTo: email,
      subject: `[Website Contact] ${subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: #FF8766; padding: 24px; border-radius: 12px 12px 0 0;">
            <h2 style="color: white; margin: 0;">New Contact Form Submission</h2>
          </div>
          <div style="background: #f9f9f9; padding: 24px; border-radius: 0 0 12px 12px;">
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #3A1606; width: 100px;">Name:</td>
                <td style="padding: 8px 0; color: #3D332F;">${name}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #3A1606;">Email:</td>
                <td style="padding: 8px 0; color: #3D332F;">${email}</td>
              </tr>
              ${phone ? `<tr>
                <td style="padding: 8px 0; font-weight: bold; color: #3A1606;">Phone:</td>
                <td style="padding: 8px 0; color: #3D332F;">${phone}</td>
              </tr>` : ""}
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #3A1606;">Subject:</td>
                <td style="padding: 8px 0; color: #3D332F;">${subject}</td>
              </tr>
            </table>
            <hr style="border: none; border-top: 1px solid #ddd; margin: 16px 0;" />
            <p style="font-weight: bold; color: #3A1606; margin-bottom: 8px;">Message:</p>
            <p style="color: #3D332F; line-height: 1.6; white-space: pre-wrap;">${message}</p>
          </div>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Failed to send message. Please try again later." },
      { status: 500 }
    );
  }
}
