import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);
const fromEmail = process.env.FROM_EMAIL;

export async function POST(req, res) {
    const {email, subject, message} = await req.json();
    console.log(email, subject, message);
    try {
        const { data, error } = await resend.emails.send({
        from: fromEmail,
        to: [fromEmail, email],
        subject: subject,
        react: (
            <>
                <h1>{subject}</h1>
                <p>Thank you for contacting Me!</p>
                <p>New Message Submitted</p>
                <p>
                    {message}
                </p>
            </>
            ),
        });

        if (error) {
        return NextResponse.json({ error }, { status: 500 });
        }

        return NextResponse.json(data);
    } catch (error) {
        return NextResponse.json({ error }, { status: 500 });
    }
}