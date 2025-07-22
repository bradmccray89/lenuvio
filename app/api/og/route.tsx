/* eslint-disable @next/next/no-img-element */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { ImageResponse } from 'next/og';
import { NextRequest } from 'next/server';

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const title = searchParams.get('title') || 'Lenuvio Blog';

    return new ImageResponse(
      (
        <div
          style={{
            background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)',
            width: '100%',
            height: '100%',
            display: 'flex',
            textAlign: 'center',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column',
            flexWrap: 'nowrap',
            position: 'relative',
          }}>
          {/* Background Pattern */}
          <div
            style={{
              position: 'absolute',
              width: '100%',
              height: '100%',
              background:
                'radial-gradient(circle at 25% 25%, #22d3ee20 0%, transparent 50%), radial-gradient(circle at 75% 75%, #8b5cf620 0%, transparent 50%)',
            }}
          />

          {/* Logo */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              marginBottom: '40px',
            }}>
            <img
              src='https://lenuv.io/images/logo.png'
              alt='Lenuvio Logo'
              width='60'
              height='60'
              style={{
                marginRight: '20px',
              }}
            />
            <div
              style={{
                fontSize: '36px',
                fontWeight: 'bold',
                color: 'white',
                fontFamily: 'system-ui',
              }}>
              Lenuvio
            </div>
          </div>

          {/* Title */}
          <div
            style={{
              fontSize: title.length > 50 ? '48px' : '64px',
              fontWeight: 'bold',
              background:
                'linear-gradient(135deg, #ffffff 0%, #22d3ee 50%, #8b5cf6 100%)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              color: 'transparent',
              lineHeight: 1.2,
              maxWidth: '900px',
              padding: '0 40px',
              fontFamily: 'system-ui',
            }}>
            {title}
          </div>

          {/* Subtitle */}
          <div
            style={{
              fontSize: '24px',
              color: '#cbd5e1',
              marginTop: '20px',
              fontFamily: 'system-ui',
            }}>
            Engineering Insights
          </div>
        </div>
      ),
      {
        width: 1200,
        height: 630,
      }
    );
  } catch (e: any) {
    console.log(`${e.message}`);
    return new Response(`Failed to generate the image`, {
      status: 500,
    });
  }
}
