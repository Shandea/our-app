import NavBar from '@/components/NavBar'
import  Footer from '@/components/Footer'
import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <NavBar />
        <Main />
        <Footer />
        <NextScript />
      </body>
    </Html>
  )
}
