// 'use client';

// import { useState } from 'react';
// import { Search } from 'lucide-react';

// interface SearchBarProps {
//   placeholder?: string;
//   onSearch: (query: string) => void;
//   label?: string;
// }

// export default function SearchBar({ placeholder = 'Search products...', onSearch, label = 'Search Products' }: SearchBarProps) {
//   const [query, setQuery] = useState('');

//   const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const value = e.target.value;
//     setQuery(value);
//     onSearch(value); // Trigger search live (you can debounce this if needed)
//   };

//   return (
//     <div className="w-full max-w-md mx-auto">
//       <label htmlFor="product-search" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
//         {label}
//       </label>
//       <div className="relative">
//         <input
//           type="text"
//           id="product-search"
//           value={query}
//           onChange={handleInputChange}
//           placeholder={placeholder}
//           className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-zinc-900 dark:text-white"
//         />
//         <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500 dark:text-gray-400" />
//       </div>
//     </div>
//   );
// }





'use client';

import { useState } from 'react';
import { Search } from 'lucide-react';
import Link from 'next/link';
import { Product } from '@/types'; // adjust path if needed

interface SearchBarProps {
  products: Product[];
  placeholder?: string;
  label?: string;
}

export default function SearchBar({ products, placeholder = 'Search products...', label = 'Search Products' }: SearchBarProps) {
  const [query, setQuery] = useState('');

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="w-full max-w-md mx-auto">
      <label htmlFor="product-search" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
        {label}
      </label>

      <div className="relative">
        <input
          type="text"
          id="slug-search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder={placeholder}
          className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-zinc-900 dark:text-white"
        />
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500 dark:text-gray-400" />
      </div>

      {query && (
        <ul className="mt-2 bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-700 rounded-md shadow-md max-h-60 overflow-y-auto">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <li key={product.id}>
                <Link
                  href={`/product/${product.slug}`}
                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-zinc-800 text-sm"
                  onClick={() => setQuery('')}
                >
                  {product.title}
                </Link>
              </li>
            ))
          ) : (
            <li className="px-4 py-2 text-sm text-gray-500 dark:text-gray-400">No products found.</li>
          )}
        </ul>
      )}
    </div>
  );
}
