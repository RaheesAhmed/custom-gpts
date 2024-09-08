import { NextRequest, NextResponse } from 'next/server';
import { google } from 'googleapis';

const oauth2Client = new google.auth.OAuth2(
  process.env.GOOGLE_CLIENT_ID,
  process.env.GOOGLE_CLIENT_SECRET,
  `${process.env.NEXTAUTH_URL}/api/auth/callback/google/analytics`
);

export async function GET(req: NextRequest) {
  const searchParams = req.nextUrl.searchParams;
  const code = searchParams.get('code');

  if (!code) {
    return NextResponse.json({ error: 'No code provided' }, { status: 400 });
  }

  try {
    const { tokens } = await oauth2Client.getToken(code);
    oauth2Client.setCredentials(tokens);
    return NextResponse.redirect(new URL('/?auth=success', process.env.NEXTAUTH_URL));
  } catch (error) {
    console.error('Error exchanging code for tokens:', error);
    // Redirect to the home page with an error parameter
    return NextResponse.redirect(new URL('/?error=auth_failed', process.env.NEXTAUTH_URL));
  }
}