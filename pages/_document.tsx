import Document, { Html, Head, Main, NextScript } from "next/document";

class RootDocument extends Document {
  static async getInitialProps(ctx: any) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  renderAnalyticsHead() {
    const GTM = process.env.NEXT_PUBLIC_GTM;
    if (!GTM) return null;

    return (
      <script
        dangerouslySetInnerHTML={{
          __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','${GTM}');`,
        }}
      />
    );
  }

  renderAnalyticsBody() {
    const GTM = process.env.NEXT_PUBLIC_GTM;
    if (!GTM) return null;

    return (
      <noscript
        dangerouslySetInnerHTML={{
          __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=${GTM}" height="0" width="0" style="display:none;visibility:hidden"></iframe>`,
        }}
      />
    );
  }

  render() {
    const ADOBE_LAUNCH_URL = process.env.NEXT_PUBLIC_ADOBE_LAUNCH;

    return (
      <Html lang="en">
        <Head>
          <script src={ADOBE_LAUNCH_URL} async />
          {this.renderAnalyticsHead()}
        </Head>
        <body>
          {this.renderAnalyticsBody()}
          <Main />
          <NextScript />
          <noscript
            dangerouslySetInnerHTML={{
              __html: `<iframe src=https://www.googletagmanager.com/ns.html?id=GTM-5QLZHWL
							height="0" width="0" style="display:none;visibility:hidden"></iframe>`,
            }}
          />
        </body>
      </Html>
    );
  }
}

export default RootDocument;
