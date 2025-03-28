import Head from 'next/head';
import Hero from '@/components/sections/Hero';
import Portfolio from '@/components/sections/Portfolio';
import Services from '@/components/sections/Services';
import About from '@/components/sections/About';
import Publications from '@/components/sections/Publications';
import Contact from '@/components/sections/Contact';

export default function Home() {
  return (
    <>
      <Head>
        <title>Padham Design | Custom Interiors</title>
        <meta name="description" content="Padham Design creates custom interior spaces that reflect your unique style and needs." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Hero />
        <Portfolio />
        <Services />
        <About />
        <Publications />
        <Contact />
        {/* Other sections will be added here */}
      </main>
    </>
  );
}
