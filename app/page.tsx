import Head from "next/head";
import HeroSection from "@/components/HeroSection";
import SkillsSection from "@/components/SkillsSection";
import ContactSection from '@/components/ContactSection';
export default function Home() {
  return (
    <>
      <Head>
        <title>My Portfolio</title>
        <meta name="description" content="Sanele Hlongwane - Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <HeroSection />
        <SkillsSection />
        <ContactSection />
      </main>
    </>
  );
}
