import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
	return (
		<Html lang="en" className="scroll-smooth">
			<Head />
			<body>
				<div className="container">
					<Main />
					<NextScript />
				</div>
			</body>
		</Html>
	);
}
