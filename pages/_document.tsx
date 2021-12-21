import Document, { DocumentContext, Html, Head, Main, NextScript } from 'next/document'

const customCSS = `* { font-family: 'Montserrat', sans-serif; }`;
class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx)

    return initialProps
  }

  render() {
    return (
      <Html className="scroll-smooth">
        <Head>
          <meta name="generator" content="@eminmuhammadi/next-app" />

          {/* Google Fonts */}
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin='' />
          <link rel="preconnect" href="https://fonts.googleapis.com" crossOrigin='' />
          <link
            href="https://fonts.googleapis.com/css2?family=Montserrat&display=optional"
            rel="stylesheet"
          />

          <style type="text/css" dangerouslySetInnerHTML={{ __html: customCSS }} />

          <link rel="icon" href="favicon.ico"/>
          <link rel="manifest" href="/manifest.json"/>

          <link rel="apple-touch-icon" sizes="57x57" href="/apple-icon-57x57.png"/>
          <link rel="apple-touch-icon" sizes="60x60" href="/apple-icon-60x60.png"/>
          <link rel="apple-touch-icon" sizes="72x72" href="/apple-icon-72x72.png"/>
          <link rel="apple-touch-icon" sizes="76x76" href="/apple-icon-76x76.png"/>
          <link rel="apple-touch-icon" sizes="114x114" href="/apple-icon-114x114.png"/>
          <link rel="apple-touch-icon" sizes="120x120" href="/apple-icon-120x120.png"/>
          <link rel="apple-touch-icon" sizes="144x144" href="/apple-icon-144x144.png"/>
          <link rel="apple-touch-icon" sizes="152x152" href="/apple-icon-152x152.png"/>
          <link rel="apple-touch-icon" sizes="180x180" href="/apple-icon-180x180.png"/>
          <link rel="icon" type="image/png" sizes="192x192" href="/android-icon-192x192.png"/>
          <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
          <link rel="icon" type="image/png" sizes="96x96" href="/favicon-96x96.png"/>
          <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>

          <meta name="msapplication-TileColor" content="#f9fafb" />
          <meta name="theme-color" content="#f9fafb" />
          <meta name="msapplication-TileImage" content="/ms-icon-144x144.png"/>
          <meta name="msapplication-config" content="/browserconfig.xml"/>
        </Head>
        <body aria-label="Document"
          role="document">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
};

export default MyDocument;