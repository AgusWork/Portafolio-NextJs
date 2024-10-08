import Document, {
	Html,
	Head,
	Main,
	NextScript,
	DocumentContext,
} from "next/document";
import { CssBaseline } from "@nextui-org/react";

class MyDocument extends Document {
	static async getInitialProps(ctx: DocumentContext) {
		const initialProps = await Document.getInitialProps(ctx);
		return {
			...initialProps,
			styles: <>{initialProps.styles}</>,
		};
	}

	render() {
		return (
			<Html lang="es">
				<Head>
					{CssBaseline.flush()}
					<link rel="preload" as="font"></link>
					<link
						rel="stylesheet"
						href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
					/>
					<link rel="shortcut icon" href="/portafolio.png" type="image/x-icon" />
					<link rel="icon" href="/portafolio.png" type="image/x-icon" />

				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}

export default MyDocument;
