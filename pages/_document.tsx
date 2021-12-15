import Document, { DocumentContext, Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx)

    return initialProps
  }

  render()
  {
      return (
        <Html>
            <Head>
                <meta name="generator" content="@eminmuhammadi/next-app" />
            </Head>    
            <body>
                <Main/>
                <NextScript />
            </body>
        </Html>
      );
  }
};

export default MyDocument;