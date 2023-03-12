import { Html, Head, Main, NextScript } from "next/document";
import { getCssText } from "../styles";

export default function Document() {
    return (
        <Html>
            <Head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link
                    rel="preconnect"
                    href="https://fonts.gstatic.com"
                    crossOrigin="anonymous"
                />
                <link
                    href="https://fonts.googleapis.com/css2?family=Manrope:wght@200;300;400;500;600;700;800&family=Space+Mono&display=swap"
                    rel="stylesheet"
                />

                <link rel="icon" href="/favicon.ico" />

                <style
                    id="stitches"
                    dangerouslySetInnerHTML={{ __html: getCssText() }}
                />

                <title>
                    Moosay | Cowsay Generator - Create Funny ASCII Art in
                    Seconds
                </title>
                <meta
                    name="description"
                    content="Use our free cowsay generator to create ASCII art with easy-to-use website. Get started now!"
                />
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}
