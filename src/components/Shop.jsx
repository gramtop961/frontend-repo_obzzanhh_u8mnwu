import React from 'react';
import { Search } from 'lucide-react';

const categories = ['All', 'Cigars', 'Pipe Tobacco', 'Rolling Tobacco', 'Accessories'];

const Shop = ({ products, onAdd, onView, searchTerm, setSearchTerm, category, setCategory }) => {
  const filtered = products.filter(p => {
    const matchesCategory = category === 'All' || p.category === category;
    const matchesSearch = p.name.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section className="max-w-7xl mx-auto px-4 py-10">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
        <h2 className="text-2xl font-semibold text-zinc-100">Our Collection</h2>
        <div className="flex flex-col md:flex-row gap-4 w-full md:w-auto">
          <div className="relative flex-1">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400" />
            <input
              value={searchTerm}
              onChange={e => setSearchTerm(e.target.value)}
              placeholder="Search products"
              className="w-full pl-9 pr-3 py-2 rounded-md bg-zinc-900 border border-zinc-800 text-zinc-100 placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-yellow-500/40"
            />
          </div>
          <select
            value={category}
            onChange={e => setCategory(e.target.value)}
            className="md:w-56 w-full px-3 py-2 rounded-md bg-zinc-900 border border-zinc-800 text-zinc-100 focus:outline-none focus:ring-2 focus:ring-yellow-500/40"
          >
            {categories.map(c => (
              <option key={c} value={c}>{c}</option>
            ))}
          </select>
        </div>
      </div>

      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filtered.map(p => (
          <article key={p.id} className="group bg-gradient-to-b from-zinc-900 to-black border border-zinc-800 rounded-lg overflow-hidden hover:border-yellow-600/40 transition-all">
            <div className="aspect-square overflow-hidden">
              <img src={p.image} alt={p.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
            </div>
            <div className="p-4">
              <h3 className="text-zinc-100 font-medium">{p.name}</h3>
              <p className="text-zinc-400 text-sm">{p.category}</p>
              <div className="mt-3 flex items-center justify-between">
                <span className="text-yellow-400 font-semibold">${p.price.toFixed(2)}</span>
                <div className="flex gap-2">
                  <button onClick={() => onView(p)} className="px-3 py-1.5 text-sm rounded-md border border-zinc-800 text-zinc-200 hover:border-yellow-600/40 hover:text-yellow-300 transition-colors">View</button>
                  <button onClick={() => onAdd(p)} className="px-3 py-1.5 text-sm rounded-md bg-yellow-500 text-black font-semibold hover:brightness-110 transition">Add</button>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="text-center text-zinc-400 py-16">No products match your search.</div>
      )}
    </section>
  );
};

export default Shop;
