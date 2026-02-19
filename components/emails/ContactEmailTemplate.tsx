// components/emails/ContactEmailTemplate.tsx

import * as React from 'react'
import { ContactFormData } from '@/lib/schemas'

interface Props {
  data: ContactFormData
}

export function ContactEmailTemplate({ data }: Props) {
  const gold = '#c4911a'

  return (
    <html>
      <body style={{ margin: 0, padding: 0, backgroundColor: '#f0f4f8', fontFamily: 'Georgia, serif' }}>
        <table width="100%" cellPadding="0" cellSpacing="0" style={{ backgroundColor: '#f0f4f8', padding: '40px 16px' }}>
          <tr>
            <td align="center">
              <table
                width="100%"
                cellPadding="0"
                cellSpacing="0"
                style={{
                  maxWidth: 600,
                  backgroundColor: '#ffffff',
                  borderTop: `3px solid ${gold}`,
                }}
              >

                {/* Header */}
                <tr>
                  <td style={{ padding: '32px 40px 24px', borderBottom: '1px solid #e6ecf2' }}>
                    <p style={{
                      margin: 0,
                      color: gold,
                      fontSize: 10,
                      letterSpacing: '0.25em',
                      textTransform: 'uppercase',
                      fontFamily: 'Arial, sans-serif',
                    }}>
                      New Website Enquiry
                    </p>

                    <p style={{ margin: '8px 0 0', color: '#1a2a3a', fontSize: 20, fontWeight: 600 }}>
                      {data.practiceArea}
                    </p>

                    <p style={{
                      margin: '6px 0 0',
                      color: '#6a7a8a',
                      fontSize: 13,
                      fontFamily: 'Arial, sans-serif',
                    }}>
                      From {data.fullName} · {new Date().toLocaleDateString('en-AU', {
                        weekday: 'long',
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                      })}
                    </p>
                  </td>
                </tr>

                {/* Contact Details */}
                <tr>
                  <td style={{ padding: '32px 40px 0' }}>
                    <p style={{
                      margin: '0 0 16px',
                      color: gold,
                      fontSize: 10,
                      letterSpacing: '0.2em',
                      textTransform: 'uppercase',
                      fontFamily: 'Arial, sans-serif',
                    }}>
                      Contact Details
                    </p>

                    <table width="100%" cellPadding="0" cellSpacing="0">
                      {[
                        ['Full Name', data.fullName],
                        ['Mobile', data.mobile],
                        ['Email', data.email],
                        ['Practice Area', data.practiceArea],
                        ...(data.preferredContactTime
                          ? [['Preferred Contact Time', data.preferredContactTime]]
                          : []),
                      ].map(([label, value]) => (
                        <tr key={label}>
                          <td style={{ padding: '8px 0', width: '40%' }}>
                            <p style={{
                              margin: 0,
                              color: '#8a9ab5',
                              fontSize: 12,
                              fontFamily: 'Arial, sans-serif',
                            }}>
                              {label}
                            </p>
                          </td>
                          <td style={{ padding: '8px 0' }}>
                            <p style={{ margin: 0, color: '#1a2a3a', fontSize: 13 }}>
                              {value}
                            </p>
                          </td>
                        </tr>
                      ))}
                    </table>
                  </td>
                </tr>

                {/* Matter Description */}
                <tr>
                  <td style={{ padding: '32px 40px 0' }}>
                    <p style={{
                      margin: '0 0 12px',
                      color: gold,
                      fontSize: 10,
                      letterSpacing: '0.2em',
                      textTransform: 'uppercase',
                      fontFamily: 'Arial, sans-serif',
                    }}>
                      Matter Description
                    </p>

                    <table
                      width="100%"
                      cellPadding="0"
                      cellSpacing="0"
                      style={{
                        backgroundColor: '#f8f9fb',
                        borderLeft: `3px solid ${gold}`,
                      }}
                    >
                      <tr>
                        <td style={{ padding: '18px 22px' }}>
                          <p style={{
                            margin: 0,
                            color: '#2a3a4a',
                            fontSize: 14,
                            lineHeight: 1.8,
                            whiteSpace: 'pre-wrap',
                          }}>
                            {data.description}
                          </p>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>

                {/* Reply CTA */}
                <tr>
                  <td style={{ padding: '32px 40px' }}>
                    <a
                      href={`mailto:${data.email}?subject=Re: Your enquiry – ${data.practiceArea}`}
                      style={{
                        display: 'inline-block',
                        backgroundColor: gold,
                        color: '#ffffff',
                        fontSize: 12,
                        fontWeight: 700,
                        letterSpacing: '0.1em',
                        textTransform: 'uppercase',
                        padding: '12px 24px',
                        textDecoration: 'none',
                        fontFamily: 'Arial, sans-serif',
                        borderRadius: 2,
                      }}
                    >
                      Reply to {data.fullName} →
                    </a>
                  </td>
                </tr>

                {/* Footer */}
                <tr>
                  <td style={{ padding: '18px 40px 24px', borderTop: '1px solid #e6ecf2' }}>
                    <p style={{
                      margin: 0,
                      color: '#9aa8b8',
                      fontSize: 11,
                      fontFamily: 'Arial, sans-serif',
                    }}>
                      Submitted via rnlegal.com.au · {new Date().toISOString()}
                    </p>
                  </td>
                </tr>

              </table>
            </td>
          </tr>
        </table>
      </body>
    </html>
  )
}
