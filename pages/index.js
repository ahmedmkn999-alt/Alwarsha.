import Navbar from '../components/Navbar';
import ProductCard from '../components/ProductCard';
import { products } from '../data/products'; // استدعاء البيانات المحلية
import Head from 'next/head';

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans" dir="rtl">
      <Head>
        <title>الورشة | الرئيسية</title>
      </Head>
      <Navbar />
      
      <header className="bg-slate-900 text-white py-20 px-4 text-center">
        <h1 className="text-4xl md:text-6xl font-black mb-6 text-orange-500">الورشة</h1>
        <p className="text-xl text-gray-300">قطع غيار أصلية.. بدون تعقيد</p>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </main>
    </div>
  );
    }
    
