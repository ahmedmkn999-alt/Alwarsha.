import { useRouter } from 'next/router';
import { products } from '../../data/products';
import Navbar from '../../components/Navbar';
import { ShoppingCart } from 'lucide-react';

export default function ProductDetails() {
  const router = useRouter();
  const { id } = router.query;
  
  // البحث عن المنتج في الملف المحلي
  const product = products.find((p) => p.id === id);

  if (!id) return <div></div>;
  if (!product) return <div className="text-center p-10">المنتج غير موجود</div>;

  return (
    <div className="min-h-screen bg-white font-sans" dir="rtl">
      <Navbar />
      <main className="max-w-7xl mx-auto px-4 py-12 grid md:grid-cols-2 gap-10">
        <div className="bg-gray-50 p-10 rounded-xl flex items-center justify-center border">
          <img src={product.image} alt={product.name} className="max-h-96" />
        </div>
        <div>
          <div className="mb-4">
            {product.condition === 'NEW' ? 
              <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-bold">جديد</span> :
              <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-bold">مستعمل</span>
            }
          </div>
          <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
          <p className="text-gray-500 mb-6">{product.description}</p>
          <div className="text-4xl font-bold text-orange-600 mb-8">{product.price} ج.م</div>
          <button className="w-full bg-slate-900 hover:bg-orange-600 transition text-white py-4 rounded-xl font-bold flex justify-center gap-2">
            <ShoppingCart /> أضف للعدة
          </button>
        </div>
      </main>
    </div>
  );
  }
            
