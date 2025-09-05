import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="id">
      <Head>
        {/* Google Fonts - EPL Style Typography */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link 
          href="https://fonts.googleapis.com/css2?family=Work+Sans:wght@300;400;500;600;700;800;900&family=DM+Sans:wght@400;500;600;700;800;900&family=Public+Sans:wght@300;400;500;600;700;800;900&family=Manrope:wght@300;400;500;600;700;800&display=swap" 
          rel="stylesheet" 
        />
        
        {/* Custom Axiforma-like Font CSS */}
        <style jsx global>{`
          @import url('https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@300;400;600;700;800;900&display=swap');
          
          /* Axiforma Alternative - Using Nunito Sans as closest match */
          .font-axiforma {
            font-family: 'Nunito Sans', 'Work Sans', system-ui, sans-serif;
            font-feature-settings: 'kern' 1, 'liga' 1, 'calt' 1;
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
          }
          
          /* EPL-style heading font */
          .font-epl-heading {
            font-family: 'Work Sans', 'DM Sans', system-ui, sans-serif;
            font-weight: 700;
            letter-spacing: -0.02em;
            line-height: 1.1;
          }
          
          /* EPL-style body font */
          .font-epl-body {
            font-family: 'Public Sans', 'DM Sans', system-ui, sans-serif;
            font-weight: 400;
            line-height: 1.6;
            letter-spacing: -0.01em;
          }
          
          /* Premium sport font for numbers/stats */
          .font-sport-numbers {
            font-family: 'Manrope', 'Work Sans', monospace;
            font-weight: 800;
            font-variant-numeric: tabular-nums;
          }
        `}</style>
        
        {/* Font Awesome Icons */}
        <link 
          rel="stylesheet" 
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
        />
      </Head>
      <body className="font-axiforma">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
