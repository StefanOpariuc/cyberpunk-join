import { type NextRequest } from 'next/server'

export async function POST(request: NextRequest) {

    const API_KEY = process.env.API_KEY
    const PUBLICATION_ID = process.env.PUBLICATION_ID
    const body = await request.json();


    const response = await fetch(`https://api.beehiiv.com/v2/publications/${PUBLICATION_ID}/subscriptions`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${API_KEY}`
        },
        body: JSON.stringify({ email: body.email, reactivate_existing: true, send_welcome_email: true })
    });

    const data = await response.json();
    return new Response(JSON.stringify(data), {
        status: response.status,
        headers: {
            'Content-Type': 'application/json'
        }
    });
}