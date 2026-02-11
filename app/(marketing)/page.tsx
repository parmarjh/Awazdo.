import Hero from '@/components/Hero';
import Features from '@/components/Features';
import Integrations from '@/components/Integrations';
import CTA from '@/components/CTA';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Hero />
      <Integrations />
      <Features />
      <CTA />
    </main>
  );
}
