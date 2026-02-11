import { NextResponse } from 'next/server';

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { email, name, company } = body;

        // Simulate database insertion or email sending
        console.log('Demo request received:', { email, name, company });

        return NextResponse.json(
            { message: 'Demo request received successfully!' },
            { status: 200 }
        );
    } catch (error) {
        return NextResponse.json(
            { error: 'Invalid request body' },
            { status: 400 }
        );
    }
}
