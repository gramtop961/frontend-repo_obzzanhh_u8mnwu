import React from 'react';

const Footer = () => {
  return (
    <footer className="mt-16 border-t border-zinc-800 bg-black/60">
      <div className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-3 gap-8 text-sm">
        <div>
          <div className="text-zinc-100 font-semibold text-lg">Aurum Leaf</div>
          <p className="text-zinc-400 mt-2">Curated premium tobacco products and accessories. Crafted for those who appreciate quiet luxury.</p>
        </div>
        <div>
          <div className="text-zinc-200 font-medium">Customer Care</div>
          <ul className="mt-3 space-y-2 text-zinc-400">
            <li>Shipping & Returns</li>
            <li>Privacy Policy</li>
            <li>Terms of Service</li>
          </ul>
        </div>
        <div>
          <div className="text-zinc-200 font-medium">Newsletter</div>
          <p className="text-zinc-400 mt-2">Join for new releases and private offers.</p>
          <div className="mt-3 flex gap-2">
            <input className="flex-1 px-3 py-2 rounded-md bg-zinc-900 border border-zinc-800 text-zinc-100 focus:outline-none focus:ring-2 focus:ring-yellow-500/40" placeholder="Email address" />
            <button className="px-4 py-2 rounded-md bg-yellow-500 text-black font-semibold hover:brightness-110 transition">Join</button>
          </div>
        </div>
      </div>
      <div className="border-t border-zinc-800/80 py-4 text-center text-xs text-zinc-500">© {new Date().getFullYear()} Aurum Leaf. All rights reserved.</div>
    </footer>
  );
};

export default Footer;
