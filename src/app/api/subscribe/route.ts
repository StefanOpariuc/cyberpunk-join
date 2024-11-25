import { type NextRequest } from 'next/server'

export async function POST(request: NextRequest) {

    const API_KEY = process.env.API_KEY
    console.log("USED API KEY", API_KEY)
    const body = await request.json();
    const email = body.email;

    const response = await fetch('https://api.beehiiv.com/v2/publications/pub_7c251de2-85f0-4639-bd67-6eea8527d881/subscriptions', {
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