import { Html, Head, Main, NextScript } from "next/document";
import { getCssText } from "../styles";

export default function Document() {
    return (
        <Html>
            <Head>
                <link rel="icon" href="/favicon.ico" />

                <style
                    id="stitches"
                    dangerouslySetInnerHTML={{ __html: getCssText() }}
                />

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
