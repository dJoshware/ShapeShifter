import Mailgun from 'mailgun.js';
import FormData from 'form-data';

const mailgun = new Mailgun(FormData);
const mg = mailgun.client({
    username: 'api',
    key: process.env.MAILGUN_API_KEY,
});

export async function POST(req) {
    const body = await req.formData();
    const email = body.get('email');
    const message = body.get('message');
    const files = body.getAll('files');

    const attachments = await Promise.all(
        files.map(async file => {
            const buffer = Buffer.from(await file.arrayBuffer());
            return {
                filename: file.name,
                data: buffer,
                contentType: file.type,
            };
        })
    );

    try {
        const result = await mg.messages.create(process.env.MAILGUN_DOMAIN, {
            from: process.env.MAILGUN_FROM,
            to: [process.env.MAILGUN_TO],
            subject: '🛠️ New Issue Reported',
            text: `From: ${email}\n\nMessage:\n${message}`,
            attachment: attachments,
        });

        return new Response(JSON.stringify({ success: true, data: result }), {
            status: 200,
        });
    } catch (error) {
        console.error('Mailgun error:', error);
        return new Response(
            JSON.stringify({ success: false, error: error.message }),
            { status: 500 }
        );
    }
}
