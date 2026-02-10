import { NextResponse } from 'next/server';

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { name, email, phone, subject, message } = body;

        // Validate required fields
        if (!name || !email || !subject || !message) {
            return NextResponse.json(
                { error: 'Missing required fields: name, email, subject, message' },
                { status: 400 }
            );
        }

        // Validate email format
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return NextResponse.json(
                { error: 'Invalid email format' },
                { status: 400 }
            );
        }

        // In production, you would:
        // 1. Send email via nodemailer, SendGrid, etc.
        // 2. Save to database
        // 3. Send to CRM
        // For now, we log and return success
        console.log('Contact Form Submission:', {
            name,
            email,
            phone: phone || 'Not provided',
            subject,
            message,
            timestamp: new Date().toISOString(),
        });

        return NextResponse.json(
            { success: true, message: 'Thank you for your message. We will get back to you shortly.' },
            { status: 200 }
        );
    } catch (error) {
        console.error('Contact form error:', error);
        return NextResponse.json(
            { error: 'Internal server error' },
            { status: 500 }
        );
    }
}
