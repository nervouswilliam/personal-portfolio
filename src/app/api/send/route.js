import { EmailTemplate } from '../../../components/EmailTemplate';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);
const fromEmail = process.env.FROM_EMAIL;

export async function POST(req, res) {
    const {body} = await req.json();
    const {email, subject, message} = body;
    try {
        const { data, error } = await resend.emails.send({
        from: 'William <jeremiah.wsebastian@gmail.com>',
        to: ['jeremiah.wsebastian@gmail.com'],
        subject: 'Hello world',
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