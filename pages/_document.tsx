import Document, { DocumentContext, Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx)

    return initialProps
  }

  render()
  {
      return (
        <Html className="scroll-smooth">
            <Head>
                <meta name="generator" content="@eminmuhammadi/next-app" />

                {/* Google Fonts */}
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin=''/>
                <link rel="preconnect" href="https://fonts.googleapis.com" crossOrigin=''/>
                <link
                  href="https://fonts.googleapis.com/css2?family=Montserrat&display=optional"
                  rel="stylesheet"
                />
            </Head>    
            <body aria-label="Document"
                  role="document">
                <Main/>
                <NextScript />
            </body>
        </Html>
      );
  }
};

export default MyDocument;