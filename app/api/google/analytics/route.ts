import { NextRequest, NextResponse } from 'next/server';
import { google } from 'googleapis';


const oauth2Client = new google.auth.OAuth2(
  process.env.GOOGLE_CLIENT_ID,
  process.env.GOOGLE_CLIENT_SECRET,
  `https://custom-gpts.vercel.app/api/auth/callback/google/analytics`
);

export async function GET(req: NextRequest) {
  try {
    const scopes = [
      'https://www.googleapis.com/auth/analytics.readonly',
    ];

    const url = oauth2Client.generateAuthUrl({
      access_type: 'offline',
      scope: scopes,
    });

    return NextResponse.json({ url });
  } catch (error) {
    console.error('Error generating Google Analytics auth URL:', error);
    return NextResponse.json({ error: 'Failed to generate auth URL' }, { status: 500 });
  }
}