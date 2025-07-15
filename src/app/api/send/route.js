import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);
const fromEmail = process.env.FROM_EMAIL;
const myEmail = process.env.MY_EMAIL;

export async function POST(req, res) {
    const {email, subject, message} = await req.json();
    console.log(email, subject, message, fromEmail, resend, myEmail);
    const html = `
    <h1>${subject}</h1>
    <p>
        Thanks for reaching out through my portfolio website. <br/> I have seen your message:
        <span style="color: #8b5cf6; font-style: italic; font-weight: 600;">
        "${message}"
        </span>
    </p>
    <p>Thank you for reaching out. I’ll get back to you soon.</p> 
    <p>Best regards,<br/>Jeremiah William Sebastian</p>
    `;

    const personal = `
    <h1>New Message !</h1>
    <p>
        You have a new message from ${email}:
        <span style="color: #8b5cf6; font-style: italic; font-weight: 600;">
        "${message}"
        </span>
    </p>
    `;
    try {
        const { data, error } = await resend.emails.send({
        from: fromEmail,
        to: [fromEmail, email],
        subject: subject,
        html:html,
        });

        if (error) {
            return NextResponse.json({ error }, { status: 500 });
        }

        const { personalData, personalError } = await resend.emails.send({
            from: fromEmail,
            to: myEmail,
            subject: `New Message from ${email}`,
            html:personal,
            });
        
        if(personalError){
            return NextResponse.json({ personalError }, { status: 500 });ß
        }

        return NextResponse.json({data, personalData});
    } catch (error) {
        return NextResponse.json({ error }, { status: 500 });
    }
}