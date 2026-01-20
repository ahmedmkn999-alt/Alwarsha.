import Link from 'next/link';
import { ShoppingCart, Wrench } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="bg-slate-900 text-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center gap-2">
            <div className="bg-orange-600 p-2 rounded-lg">
              <Wrench size={24} className="text-white" />
            </div>
            <span className="text-2xl font-bold">الورشة</span>
          </Link>

          <Link href="/cart" className="flex items-center gap-2 hover:text-orange-500 transition">
            <span className="font-bold">السلة</span>
            <ShoppingCart size={24} />
          </Link>
        </div>
      </div>
    </nav>
  );
    }
