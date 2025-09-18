import './globals.css'
import Script from 'next/script'

const timestamp = Date.now(); // cache-busting param
console.log("Time Stamp",timestamp)
export const metadata = {
  metadataBase: new URL(
    process.env.NODE_ENV === 'production'
      ? 'https://abhiramiwedsamal.vercel.app'
      : 'http://localhost:3000'
  ),
  title: 'Amal & Abhirami — Wedding Invitation',
  description: ' Oct 19, 2025 — Join our journey ',
  openGraph: {
    title: 'Amal & Abhirami — Wedding Invitation',
    description: 'Oct 19, 2025 || Join Our Journey ',
    images: [
      {
        url: `https://abhiramiwedsamal.vercel.app/og-v1.png?t=${timestamp}`,
        width: 1200,
        height: 630,
        alt: 'Amal & Abhirami Wedding Invitation'
      }
    ],
    url: 'https://abhiramiwedsamal.vercel.app/',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=1200, initial-scale=0.3, user-scalable=yes" />
      </head>
      <body>
        <Script id="force-desktop-view" strategy="beforeInteractive">
          {`
            // Force desktop viewport
            const viewport = document.querySelector('meta[name="viewport"]');
            if (viewport) {
              viewport.setAttribute('content', 'width=1200, initial-scale=0.3, user-scalable=yes');
            } else {
              const meta = document.createElement('meta');
              meta.name = 'viewport';
              meta.content = 'width=1200, initial-scale=0.3, user-scalable=yes';
              document.head.appendChild(meta);
            }
          `}
        </Script>
        {children}
      </body>
    </html>
  );
}
