import Head from 'next/head';
import Hero from '@/components/sections/Hero';
import Portfolio from '@/components/sections/Portfolio';
import Services from '@/components/sections/Services';
import About from '@/components/sections/About';
import Publications from '@/components/sections/Publications';
import Contact from '@/components/sections/Contact';
import Footer from '@/components/sections/Footer';

export default function Home() {
  return (
    <>
      <Head>
        <title>Padham Design | Custom Interiors</title>
        <meta name="description" content="Carol Padham brings over 25 years of interior design expertise to hospitality and residential spaces across the Bay Area and Northern California." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:title" content="Padham Design | Custom Interiors" />
        <meta property="og:description" content="Carol Padham brings over 25 years of interior design expertise to hospitality and residential spaces across the Bay Area and Northern California." />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/images/interiors/Interior1.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Padham Design | Custom Interiors" />
        <meta name="twitter:description" content="Carol Padham brings over 25 years of interior design expertise to hospitality and residential spaces across the Bay Area and Northern California." />
        <meta name="twitter:image" content="/images/interiors/Interior1.jpg" />
      </Head>
      <main>
        <Hero />
        <Portfolio />
        <Services />
        <About />
        <Publications />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
