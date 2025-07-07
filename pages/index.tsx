import Head from 'next/head';
import Layout from '../components/Layout';
import ProductCard from '../components/ProductCard';
import { retroKits, newKits } from '../data/products';

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Futdrop | Retro & New Kits</title>
      </Head>

      <section className="bg-primary text-white py-20 text-center px-4">
        <h2 className="text-5xl font-heading mb-4">Iconic Football Kits Delivered</h2>
        <p className="text-lg mb-6 max-w-2xl mx-auto">From classic retro to brand new drops – wear your team with pride.</p>
      </section>

      <section id="retro" className="py-16 px-4 max-w-7xl mx-auto">
        <h2 className="text-3xl font-heading text-primary mb-8 text-center">Retro Kits</h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {retroKits.map((kit, index) => (
            <ProductCard key={index} {...kit} />
          ))}
        </div>
      </section>

      <section id="new" className="py-16 px-4 max-w-7xl mx-auto">
        <h2 className="text-3xl font-heading text-primary mb-8 text-center">New Season Kits</h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {newKits.map((kit, index) => (
            <ProductCard key={index} {...kit} />
          ))}
        </div>
      </section>
    </Layout>
  );
}
