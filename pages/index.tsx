import Head from "next/head"
export default function Home() {
  return (
    <>
    <Head>
      <title>KXKDA</title>
      <link rel="shortcut icon" href="/kxkda__icon.png" />
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:locale" content="en_GB" />
        <meta property="og:type" content="website" />
        <meta
          property="og:description"
          content="KXKDA - KXKDA - KXKDA - KXKDA - KXKDA"
        />
        <meta
          name="description"
          content="KXKDA - KXKDA - KXKDA - KXKDA - KXKDA"
        />
    </Head>
    <main className="lg:min-h-screen min-h-[100dvh] flex items-center justify-center">
      <p className="dark:text-[#fafafa] text-3xl header__letter_spacing">KXKDA</p>
    </main>
    </>
  )
}
