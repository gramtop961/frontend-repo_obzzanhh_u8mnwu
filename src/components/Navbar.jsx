import React from 'react';
import { ShoppingCart, Menu } from 'lucide-react';

const Navbar = ({ onNavigate, cartCount }) => {
  const [open, setOpen] = React.useState(false);

  const NavLinks = () => (
    <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-8 text-sm">
      <button onClick={() => { onNavigate('home'); setOpen(false); }} className="text-zinc-200 hover:text-yellow-400 transition-colors">Home</button>
      <button onClick={() => { onNavigate('shop'); setOpen(false); }} className="text-zinc-200 hover:text-yellow-400 transition-colors">Shop</button>
      <button onClick={() => { onNavigate('about'); setOpen(false); }} className="text-zinc-200 hover:text-yellow-400 transition-colors">About</button>
      <button onClick={() => { onNavigate('contact'); setOpen(false); }} className="text-zinc-200 hover:text-yellow-400 transition-colors">Contact</button>
    </div>
  );

  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-black/40 bg-black/60 border-b border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-9 w-9 rounded-full bg-gradient-to-br from-yellow-500 to-amber-700 shadow ring-1 ring-yellow-400/30" />
          <div className="leading-tight">
            <div className="text-lg md:text-xl font-semibold tracking-wide text-zinc-100">Aurum Leaf</div>
            <div className="text-[10px] uppercase tracking-[0.2em] text-zinc-400">Premium Tobacco</div>
          </div>
        </div>

        <nav className="hidden md:block">
          <NavLinks />
        </nav>

        <div className="flex items-center gap-4">
          <button onClick={() => onNavigate('cart')} className="relative group">
            <ShoppingCart className="w-6 h-6 text-zinc-200 group-hover:text-yellow-400 transition-colors" />
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 text-[10px] px-1.5 py-0.5 rounded-full bg-yellow-500 text-black font-semibold ring-1 ring-yellow-300">{cartCount}</span>
            )}
          </button>
          <button className="md:hidden" onClick={() => setOpen(!open)} aria-label="Toggle menu">
            <Menu className="w-6 h-6 text-zinc-200" />
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden px-4 pb-4 border-t border-zinc-800">
          <NavLinks />
        </div>
      )}
    </header>
  );
};

export default Navbar;
