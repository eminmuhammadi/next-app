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
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta name="generator" content="@eminmuhammadi/next-docs" />
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