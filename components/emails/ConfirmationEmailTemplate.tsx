// components/emails/ConfirmationEmailTemplate.tsx

import * as React from 'react'
import { ContactFormData } from '@/lib/schemas'


interface Props {
  data: ContactFormData
}

export function ConfirmationEmailTemplate({ data }: Props) {
  const gold = '#c4911a'

  return (
    <html lang="en">
      <body
        style={{
          margin: 0,
          padding: 0,
          backgroundColor: '#f0f4f8',
          fontFamily: 'Georgia, serif',
        }}
      >
        <table
          width="100%"
          cellPadding="0"
          cellSpacing="0"
          style={{ backgroundColor: '#f0f4f8', padding: '40px 16px' }}
        >
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
                  <td
                    style={{
                      padding: '32px 40px 24px',
                      borderBottom: '1px solid #e6ecf2',
                    }}
                  >
                    <p
                      style={{
                        margin: 0,
                        color: gold,
                        fontSize: 10,
                        letterSpacing: '0.25em',
                        textTransform: 'uppercase',
                        fontFamily: 'Arial, sans-serif',
                      }}
                    >
                      R&amp;N Legal
                    </p>

                    <p
                      style={{
                        margin: '8px 0 0',
                        color: '#1a2a3a',
                        fontSize: 20,
                        fontWeight: 600,
                      }}
                    >
                      Thank you, {data.fullName}
                    </p>

                    <p
                      style={{
                        margin: '6px 0 0',
                        color: '#6a7a8a',
                        fontSize: 13,
                        fontFamily: 'Arial, sans-serif',
                      }}
                    >
                      We have received your enquiry and will be in touch within
                      1 business day.
                    </p>
                  </td>
                </tr>

                {/* Summary of their submission */}
                <tr>
                  <td style={{ padding: '32px 40px 0' }}>
                    <p
                      style={{
                        margin: '0 0 16px',
                        color: gold,
                        fontSize: 10,
                        letterSpacing: '0.2em',
                        textTransform: 'uppercase',
                        fontFamily: 'Arial, sans-serif',
                      }}
                    >
                      Your Enquiry Summary
                    </p>

                    <table width="100%" cellPadding="0" cellSpacing="0">
                      {[
                        ['Practice Area', data.practiceArea],
                        ['Your Email', data.email],
                        ['Your Mobile', data.mobile],
                        ...(data.preferredContactTime
                          ? [['Preferred Contact Time', data.preferredContactTime]]
                          : []),
                      ].map(([label, value]) => (
                        <tr key={label}>
                          <td style={{ padding: '8px 0', width: '40%' }}>
                            <p
                              style={{
                                margin: 0,
                                color: '#8a9ab5',
                                fontSize: 12,
                                fontFamily: 'Arial, sans-serif',
                              }}
                            >
                              {label}
                            </p>
                          </td>
                          <td style={{ padding: '8px 0' }}>
                            <p
                              style={{
                                margin: 0,
                                color: '#1a2a3a',
                                fontSize: 13,
                              }}
                            >
                              {value}
                            </p>
                          </td>
                        </tr>
                      ))}
                    </table>
                  </td>
                </tr>

                {/* Their message */}
                <tr>
                  <td style={{ padding: '32px 40px 0' }}>
                    <p
                      style={{
                        margin: '0 0 12px',
                        color: gold,
                        fontSize: 10,
                        letterSpacing: '0.2em',
                        textTransform: 'uppercase',
                        fontFamily: 'Arial, sans-serif',
                      }}
                    >
                      Your Message
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
                          <p
                            style={{
                              margin: 0,
                              color: '#2a3a4a',
                              fontSize: 14,
                              lineHeight: 1.8,
                              whiteSpace: 'pre-wrap',
                            }}
                          >
                            {data.description}
                          </p>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>

                {/* Contact us CTA */}
                <tr>
                  <td style={{ padding: '32px 40px' }}>
                    <p
                      style={{
                        margin: '0 0 16px',
                        color: '#2a3a4a',
                        fontSize: 13,
                        lineHeight: 1.7,
                        fontFamily: 'Arial, sans-serif',
                      }}
                    >
                      If your matter is urgent, please call us directly.
                    </p>

                    <a
                      href="tel:0430593124"
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
                      Call R&amp;N Legal →
                    </a>
                  </td>
                </tr>

                {/* Footer */}
                <tr>
                  <td
                    style={{
                      padding: '18px 40px 24px',
                      borderTop: '1px solid #e6ecf2',
                    }}
                  >
                    <p
                      style={{
                        margin: 0,
                        color: '#9aa8b8',
                        fontSize: 11,
                        fontFamily: 'Arial, sans-serif',
                      }}
                    >
                      © R&amp;N Legal · rnlegal.com.au · This email was sent
                      because you submitted an enquiry on our website.
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