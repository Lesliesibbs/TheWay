import Document, { Html, Head, Main, NextScript } from 'next/document'
import Footer from '../src/components/footer'

class MyDocument extends Document {
  render() {
    return (
		<Html lang="en">
			<Head>
				<meta
					name="viewport"
					content="initial-scale=1.0, width=device-width"
				/>
				<link
					rel="preconnect"
					href="https://fonts.gstatic.com"
					crossOrigin
				/>
				<link
					href="https://fonts.googleapis.com/css2?family=Benne&family=Kirang+Haerang&family=Yeseva+One&family=Reenie+Beanie&display=swap"
					rel="stylesheet"
				/>
			</Head>
			<body>
				<Main />
				<NextScript />
			</body>
			<Footer />
		</Html>
	);
  }
}

export default MyDocument