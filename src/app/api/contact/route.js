import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
    try {
        const body = await req.json();
        const { from_name, from_email, subject, message } = body;

        const data = await resend.emails.send({
            from: "Portfolio Contact <onboarding@resend.dev>",
            to: "sumon01333581557@gmail.com", // তোমার email
            subject: subject || `New message from ${from_name}`,
            html: `
                <h2>New Contact Message</h2>
                <p><b>Name:</b> ${from_name}</p>
                <p><b>Email:</b> ${from_email}</p>
                <p><b>Subject:</b> ${subject}</p>
                <p><b>Message:</b> ${message}</p>
            `,
        });

        return Response.json({ success: true, data });
    } catch (error) {
        return Response.json({ success: false, error });
    }
}