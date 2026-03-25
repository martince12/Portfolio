import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
    try {
        const { name, email, phone, message } = await req.json();

        if (!name || !email || !message) {
            return Response.json({ error: "Missing required fields" }, { status: 400 });
        }

        await resend.emails.send({
            from: process.env.CONTACT_FROM_EMAIL,
            to: process.env.CONTACT_TO_EMAIL,
            subject: `New Portfolio Message from ${name}`,
            reply_to: email,
            html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6;">
          <h2>New Contact Message</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone || "-"}</p>
          <p><strong>Message:</strong></p>
          <p>${message}</p>
        </div>
      `,
        });

        return Response.json({ success: true });
    } catch (error) {
        return Response.json({ error: "Failed to send email" }, { status: 500 });
    }
}